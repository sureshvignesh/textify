class HomeController < ApplicationController

  def index
    user_doc = assign_document_to_user()
    @text = user_doc.document_page.text
    @file_name = "/"+user_doc.document_page.document.name + ".pdf"
  end

  def assign_document_to_user
    user_status = UserDetail.find_by(user_id: current_user.id)
    if !(user_status.present?)
      user_doc = assign_page
    else
        user_status = UserDetail.order("id DESC").find_by(user_id: current_user.id)
        if (user_status.status == 2 )
          user_doc = user_status
        else
          user_doc = assign_page
        end
    end
		return user_doc
  end

  def assign_page
    document_page = DocumentPage.find_by(status: 1)
    user_doc = UserDetail.create(user_id: current_user.id, document_page_id:document_page.id, from_time: Time.now(),status: 2)
    document_page.update(status: 2,user_id: current_user.id)
    document_page.document.update(document_status: 2)
    return user_doc
  end
end
