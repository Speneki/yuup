json.extract! business, :id, :business_name, :address, :longitude, 
                        :latitude, :number, :website, :price, :category,
                        :avg_rating
# if business.photos.attached? 
#     json.photoUrl url_for(business.photos.first)
# end
json.photos business.photos.map { |photo| url_for(photo)}