json.business do
    @businesses.each do |business|
        json.set! business.id do
            json.partial! 'api/businesses/business', business: business

            if business.photos.attached? 
                json.photoUrl url_for(business.photos.first)
            end

        end
    end
end