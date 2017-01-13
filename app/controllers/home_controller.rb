class HomeController < ApplicationController

  def index
    @user_doc = assign_document_to_user()
    @text = @user_doc.document_page.text
    @file_name = "/"+@user_doc.document_page.document.name + ".pdf"
  end

  def submit
    processed = Processed.create(text: params['editor'], document_page_id: params['document_page'])
    processed.document_page.update(status: 3)
    processed.document_page.document.update(document_status: 3)
    user_detail = UserDetail.find_by(document_page_id: params['document_page'])
    user_detail.update(status: 3,to_time: Time.now())
    user_detail.update(time_taken: time_difference(user_detail.to_time,user_detail.from_time))
    redirect_to home_index_path
  end

  def time_difference(to_time,from_time)
    diff = to_time - from_time
    mm, ss = diff.divmod(60)
    hh, mm = mm.divmod(60)
    dd, hh = hh.divmod(24)
    difference = "%d:%d:%d:%d" % [dd, hh, mm, ss]
    return difference
  end
  def autosave
    # params['autosave'].gsub!(/<br(\s*\/)?>/, '')
    # params['autosave'].gsub!('<br />','')
    # params['autosave'].gsub!('&nbsp;','')
    # params['autosave'].gsub!(/<p>[\s$]*<\/p>/, '')
    # params['autosave'].gsub!("\n",'')
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
