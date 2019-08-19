class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save
            render 'api/reviews/show'
        else 
            render json: ["Please write a review"], status: 422
        end
    end

    def index 
        @reviews = Review.all
        render :index
    end

    def update 
        
        @review = Review.find_by(id: params[:review][:review_id].to_i)

        if @review.update(review_params)
            render 'api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy!
        @business = @review.business
        render 'api/businesses/show'
    end 


    private

    def review_params
        params.require(:review).permit( :user_id, :business_id, :rating, :body )
    end
end