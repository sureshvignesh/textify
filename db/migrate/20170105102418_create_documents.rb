class CreateDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :documents do |t|
      t.string :name
      t.integer :doc_type
      t.integer :subtype
      t.integer :ministry
      t.integer :published_by
      t.integer :number
      t.integer :year
      t.integer :total_page
      t.string :pdf_file
      t.integer :document_status

      t.timestamps
    end
  end
end
