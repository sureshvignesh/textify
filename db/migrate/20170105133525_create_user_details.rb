class CreateUserDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :user_details do |t|
      t.integer :status
      t.datetime :from_time
      t.datetime :to_time
      t.float :time_taken
      t.references :user, foreign_key: true
      t.references :document_page, foreign_key: true

      t.timestamps
    end
  end
end
