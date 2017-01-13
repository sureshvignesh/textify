# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170105133525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "document_pages", force: :cascade do |t|
    t.string   "text"
    t.string   "temp_text"
    t.integer  "status"
    t.integer  "document_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["document_id"], name: "index_document_pages_on_document_id", using: :btree
    t.index ["user_id"], name: "index_document_pages_on_user_id", using: :btree
  end

  create_table "documents", force: :cascade do |t|
    t.string   "name"
    t.integer  "doc_type"
    t.integer  "subtype"
    t.integer  "ministry"
    t.integer  "published_by"
    t.integer  "number"
    t.integer  "year"
    t.integer  "total_page"
    t.string   "pdf_file"
    t.integer  "document_status"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "processeds", force: :cascade do |t|
    t.string   "text"
    t.integer  "document_page_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["document_page_id"], name: "index_processeds_on_document_page_id", using: :btree
  end

  create_table "user_details", force: :cascade do |t|
    t.integer  "status"
    t.datetime "from_time"
    t.datetime "to_time"
    t.string   "time_taken"
    t.integer  "user_id"
    t.integer  "document_page_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["document_page_id"], name: "index_user_details_on_document_page_id", using: :btree
    t.index ["user_id"], name: "index_user_details_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "role",                   default: 2
    t.string   "first_name"
    t.string   "last_name"
    t.string   "mobile"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "document_pages", "documents"
  add_foreign_key "document_pages", "users"
  add_foreign_key "processeds", "document_pages"
  add_foreign_key "user_details", "document_pages"
  add_foreign_key "user_details", "users"
end
