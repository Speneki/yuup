# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  business_name :string           not null
#  address       :string           not null
#  longitude     :float            not null
#  latitude      :float            not null
#  number        :string           not null
#  website       :string           not null
#  price         :string           not null
#  category      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Business < ApplicationRecord
    validates :business_name, :address, :longitude, :latitude, :price, presence: true

    has_many :reviews

    has_one_attached :photo

    def avg_rating
        reviews.average(:rating)
    end
    
end
