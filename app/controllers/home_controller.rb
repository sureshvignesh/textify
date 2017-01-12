class HomeController < ApplicationController

  def index
    @user_doc = assign_document_to_user()
    @text = @user_doc.document_page.temp_text
    @file_name = "/"+@user_doc.document_page.document.name + ".pdf"
  end

  def submit
    # processed_text = params[:data]
    # document_page = params[:doc_page_id]
    processed = Processed.create(text: text, document_page_id: params[:doc_page_id].id)
    processed.document_page.update(status: 3)
    processed.document_page.document.update(document_status: 3)
    redirect_to home_index_path
  end


  def autosave
    # params['autosave'].gsub!(/<br(\s*\/)?>/, '')
    params['autosave'].gsub!('<br />','')
    params['autosave'].gsub!('&nbsp;','')
    params['autosave'].gsub!(/<p>[\s$]*<\/p>/, '')
    params['autosave'].gsub!("\n",'')
    DocumentPage.find(params[:doc_page_id]).update(temp_text: params['autosave'])
    render :json => { success: "Data Saved", status:200 }, status:200
  end

  def completed_docs
    documents = []
    document_pages = DocumentPage.where(status: 3,user_id: current_user.id)
    document_pages.each do |doc_page|
      @documents << doc_page.document
    end
  end

  def assign_document_to_user
    user_status = UserDetail.find_by(user_id: current_user.id)
    if !(user_status.present?)
      document_page = DocumentPage.find_by(status: 1)
      user_doc = UserDetail.create(user_id: current_user.id, document_page_id:document_page.id, from_time: Time.now(),status: 2)
      document_page.update(status: 2,user_id: current_user.id)
      document_page.document.update(document_status: 2)
    else
        user_status = UserDetail.order("id DESC").find_by(user_id: current_user.id)
        if (user_status.status == 2 )
          user_doc = user_status
        else
          document_page = DocumentPage.find_by(status: 1)
          user_doc = UserDetail.create(user_id: current_user.id, document_page_id:document_page.id, from_time: Time.now(),status: 2)
          document_page.update(status: 2,user_id: current_user.id)
          document_page.document.update(document_status: 2)
        end
    end
		return user_doc
  end
end
