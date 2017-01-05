class CreateDocumentPages < ActiveRecord::Migration[5.0]
  def change
    create_table :document_pages do |t|
      t.string :text
      t.string :temp_text
      t.integer :status
      t.references :document, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
