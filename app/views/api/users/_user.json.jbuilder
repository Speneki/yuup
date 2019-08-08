json.extract! user, :id, :email, :firstName, :location, :lastName
if user.photo.attached? 
    json.photoUrl url_for(user.photo)
else
    json.photoUrl image_url('no_img.jpg')
end
