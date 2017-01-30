namespace :daily_work do
  desc "Import Data"

  task :start => :environment do
    query = {role: 2}
    @users = User.where_clause(query,User.where(query).count)
    @completed_doc = {}
    @users.each do |user|
      query = {status: 3, user_id: user.id}
      @doc_names = DocumentPage.where_clause(query, DocumentPage.where(query).count)
      @completed_doc[:user.email] = @doc_names.collect {|p| p.document.email}
    end

    UserMailer.work_update(@completed_doc)
  end
end
