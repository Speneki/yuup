json.partial! 'api/businesses/business', business: @business

json.reviews do
    @business.reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end
end

json.users do
    @business.reviews.map(&:user).each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
end