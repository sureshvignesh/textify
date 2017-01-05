require 'csv'
require 'pry'
require 'pg'

conn   = PGconn.connect( :hostaddr=>"127.0.0.1", :port=>5432, :dbname=>"ACTtoTEXT_development", :user=>"vinod", :password=>"password")
documents = conn.exec("select * from documents ORDER BY id")
processeds = conn.exec("select * from processeds")


documents.each do |doc|
  doc_name = doc['name']
  total_page = doc['total_page']
  completed_page = doc['completed_pages']
  pages = []
  doc_pages = conn.exec("select * from document_pages where document_id=#{doc['id']} ORDER BY page_no")
  text = ""
  doc_pages.each_with_index do |doc_page,index|
    processed_text = conn.exec("select * from processeds where document_page_id=#{doc_page['id']}")
    if processed_text.count != 0
      text = text.to_s + "<page doc_id=#{doc['id']} page_no=#{index+1}>"
      if processed_text.first['text'] != ""
        text = text + processed_text.first['text']
      else
        temp_text = conn.exec("select * from document_pages where id=#{doc_page['id']}")
        text = temp_text.first['text']
      end
      text = text + "</page doc_id=#{doc['id']} page_no=#{index+1}>"
    end
  end
end
