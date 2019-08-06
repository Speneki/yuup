json.extract! user, :id, :email, :firstName, :location
# debugger
if user.photo.attached? 
    json.photoUrl url_for(user.photo)
else
    # debugger
    json.photoUrl image_url('no_img.jpg')
end
