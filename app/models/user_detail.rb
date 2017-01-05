class UserDetail < ApplicationRecord
  belongs_to :user
  belongs_to :document_page
end
