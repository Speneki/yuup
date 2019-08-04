# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  body        :string           not null
#  rating      :integer          not null
#

class Review < ApplicationRecord
    validates :user_id, :business_id, :rating, presence: true
    validates :body, length: { minimum: 20 }

    belongs_to :business
    belongs_to :user
end
