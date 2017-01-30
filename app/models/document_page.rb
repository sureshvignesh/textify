class DocumentPage < ApplicationRecord
  belongs_to :document
  belongs_to :user

  def self.where_clause(query,limit)
    @document_pages = DocumentPage.where(query).take(limit)
  end
end
