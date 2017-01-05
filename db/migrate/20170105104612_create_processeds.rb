class CreateProcesseds < ActiveRecord::Migration[5.0]
  def change
    create_table :processeds do |t|
      t.string :text
      t.references :document_page, foreign_key: true

      t.timestamps
    end
  end
end
