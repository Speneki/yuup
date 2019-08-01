
class Api::BusinessesController < ApplicationController
    def show

    end


    def index

    end



    private

    def business_params
        params.require(:business).permit(:id, :business_name, :address, )
    end

end