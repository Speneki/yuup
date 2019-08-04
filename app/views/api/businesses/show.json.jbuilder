json.partial! 'api/businesses/business', business: @business

    @business.reviews.each do |review|
        json.reviews do
            json.set! review.id do
                json.partial! 'api/reviews/review', review: review
            end
        end
    end