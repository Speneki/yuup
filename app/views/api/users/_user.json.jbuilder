json.extract! user, :id, :email, :firstName
json.photoUrl url_for(user.photo)