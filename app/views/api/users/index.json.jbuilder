json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user

            if user.photo.attached? 
                json.photoUrl url_for(user.photo)
            end
      
        end
    end
end