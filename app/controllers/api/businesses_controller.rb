
class Api::BusinessesController < ApplicationController
    def show

        @business = Business.find_by(id: params[:id])
        render :show
    end

    def index
        @businesses = Business.all
        render :index
    end

end