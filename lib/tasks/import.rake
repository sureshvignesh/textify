namespace :import do
        desc "Import Data"

        task :start => :environment do
            require 'csv'
            require 'pry'
            require 'pg'

            conn   = PGconn.connect( :hostaddr=>"127.0.0.1", :port=>5432, :dbname=>"ACTtoTEXT_development", :user=>"vinod", :password=>"password")
            documents = conn.exec("select * from documents ORDER BY id")
            processeds = conn.exec("select * from processeds")


            documents.first(200).each do |doc|
              doc_name = doc['name']
              total_page = doc['total_page']
              completed_page = doc['completed_pages']
              pages = []
              doc_pages = conn.exec("select * from document_pages where document_id=#{doc['id']} ORDER BY page_no")
              text = ""
              doc_pages.each_with_index do |doc_page,index|
                processed_text = conn.exec("select * from processeds where document_page_id=#{doc_page['id']}")
                if processed_text.count != 0
                  text = text.to_s + "<br><br><br><page doc_id=#{doc['id']} page_no=#{index+1}>"
                  if processed_text.first['text'] != ""
                    text = text + processed_text.first['text']
                  else
                    temp_text = conn.exec("select * from document_pages where id=#{doc_page['id']}")
                    text += temp_text.first['text']
                  end
                  text = text + "</page doc_id=#{doc['id']} page_no=#{index+1}>"
                else
                  text = text.to_s + "<br><br><br><page doc_id=#{doc['id']} page_no=#{index+1}>"
                  text += "<h2>Page-#{index+1} Not Found</h2>"
                  text += "</page doc_id=#{doc['id']} page_no=#{index+1}>"
                end
              end
              document = Document.create(name: doc['name'], doc_type: 1, subtype: 1,total_page: doc_pages.count,document_status: 1)
              document_page = DocumentPage.create(text: text, temp_text: text, status: 1, document_id: document.id,user_id: 1)

            end

        end
end
