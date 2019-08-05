json.extract! business, :id, :business_name, :address, :longitude, 
                    :latitude, :number, :website, :price, :category,
                        :avg_rating, :review_ids

json.photos business.photos.map { |photo| url_for(photo)}