json.reviews do
    @reviews.each do |review|
        json.set! review.id do
            # debugger
            json.partial! 'api/reviews/review', review: review
        end
    end
end

