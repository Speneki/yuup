json.extract! user, :id, :email, :firstName, :location
json.photoUrl url_for(user.photo)