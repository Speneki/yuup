# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
User.destroy_all
Review.destroy_all


demo = User.create(firstName: 'Spencer', lastName: "Tassone", email: 'Spencerwilliamtassone@gmail.com', 
    password: "password", location: "10025")
demo.photo.attach(io: File.open("./app/assets/images/people/pic1.png"), filename: 'spencer.pnd')

biz1 = Business.create(business_name: "Absolute Bagels", address: "2788 Broadway, New York, NY 10025", longitude: -73.9674407,
    latitude: 40.8025115, number: "(212) 932-2052", website: "www.mmmhmmBAGELS.com", 
    price: 1, category: 'food')
biz1.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant1.jpeg"), filename: 'food1.jpeg')
biz1.photos.attach(io: File.open("./app/assets/images/food-pix/food1.jpeg"), filename: 'food2.jpeg')
biz1.photos.attach(io: File.open("./app/assets/images/food-pix/food2.jpeg"), filename: 'food3.jpeg')
biz1.photos.attach(io: File.open("./app/assets/images/food-pix/food3.jpeg"), filename: 'food6.jpeg')

biz2 = Business.create(business_name: "Culture Espresso", address: "72 West 38th St. New York, NY 10018", 
    latitude: 40.7519075, longitude: -73.99261, number: "(212) 302 0200", website: "http://www.cultureespresso.com/", 
    price: 2, category: 'food')
biz2.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant2.jpeg"), filename: 'food2000.jpeg')
biz2.photos.attach(io: File.open("./app/assets/images/food-pix/food4.jpeg"), filename: 'food4.jpeg')
biz2.photos.attach(io: File.open("./app/assets/images/food-pix/food5.jpeg"), filename: 'food5.jpeg')
biz2.photos.attach(io: File.open("./app/assets/images/food-pix/food6.jpeg"), filename: 'food6.jpeg')

biz3 = Business.create(business_name: "Balthazar", address: "80 Spring St New York, NY 10012" , latitude: 40.7226041,
    longitude: -73.9982235, number: "(212) 965-1414", website: "https://balthazarny.com/", price: 3, category: 'food')
biz3.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant3.jpg"), filename: 'food102013.jpeg')
biz3.photos.attach(io: File.open("./app/assets/images/food-pix/food7.jpeg"), filename: 'food12415.jpeg')
biz3.photos.attach(io: File.open("./app/assets/images/food-pix/food8.jpeg"), filename: 'food141412.jpeg')
biz3.photos.attach(io: File.open("./app/assets/images/food-pix/food9.jpeg"), filename: 'food1412412.jpeg')

biz4 = Business.create(business_name: "Shake Shack", address: "1333 Broadway, New York, NY 10018" , latitude: 40.7513684,
    longitude: -73.9879468, number: "(646) 230-0696", website: "shakeshack.com", price: 1, category: 'food')
biz4.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant4.png"), filename: 'food1020123.jpeg')
biz4.photos.attach(io: File.open("./app/assets/images/food-pix/food10.jpeg"), filename: 'food12415.jpeg')
biz4.photos.attach(io: File.open("./app/assets/images/food-pix/food11.jpeg"), filename: 'food141412.jpeg')
biz4.photos.attach(io: File.open("./app/assets/images/food-pix/food12.jpeg"), filename: 'food1412412.jpeg')

biz5 = Business.create(business_name: "Pokeworks", address: "63 W 37th St, New York, NY 10018" , latitude: 40.7516837,
    longitude: -73.9859569, number: "(646) 230-0696", website: "pokeworks.com", price: 1, category: 'food')
biz5.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant5.jpeg"), filename: 'food102013.jpeg')
biz5.photos.attach(io: File.open("./app/assets/images/food-pix/food13.jpeg"), filename: 'food12415.jpeg')
biz5.photos.attach(io: File.open("./app/assets/images/food-pix/food14.jpeg"), filename: 'food141412.jpeg')
biz5.photos.attach(io: File.open("./app/assets/images/food-pix/food15.jpeg"), filename: 'food1412412.jpeg')

biz6 = Business.create(business_name: "The Dutch", address: "131 Sullivan St, New York, NY 10012" , latitude: 40.7263528226809,
    longitude: -74.0021536, number: "(212) 677-6200", website: "openres-aa.herokuapp.com", price: 3, category: 'food')
biz6.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant6.jpg"), filename: 'food102013.jpeg')
biz6.photos.attach(io: File.open("./app/assets/images/food-pix/food16.jpeg"), filename: 'food12415.jpeg')
biz6.photos.attach(io: File.open("./app/assets/images/food-pix/food17.jpeg"), filename: 'food141412.jpeg')
biz6.photos.attach(io: File.open("./app/assets/images/food-pix/food18.jpeg"), filename: 'food1412412.jpeg')

biz7 = Business.create(business_name: "Socarrat Paella Bar", address: "259 W 19th St, New York, NY 10011" , latitude: 40.7226314,
    longitude: -74.0013786, number: "(212) 462-1000", website: "https://socarratnyc.com", price: 3, category: 'food')
biz7.photos.attach(io: File.open("./app/assets/images/food-pix/restaurant/restaurant7.jpeg"), filename: 'food102013.jpeg')
biz7.photos.attach(io: File.open("./app/assets/images/food-pix/food19.jpeg"), filename: 'food12415.jpeg')
biz7.photos.attach(io: File.open("./app/assets/images/food-pix/food20.jpeg"), filename: 'food141412.jpeg')
biz7.photos.attach(io: File.open("./app/assets/images/food-pix/food21.jpeg"), filename: 'food1412412.jpeg')


user1 = User.create(firstName: "Lillian", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: 73301 , password: 'password')
user1.photo.attach(io: File.open("./app/assets/images/people/pic2.jpeg"), filename: "profpic.jpeg")
user2 = User.create(firstName: "George", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: 10025, password: 'password')
user2.photo.attach(io: File.open("./app/assets/images/people/pic3.jpeg"), filename: "profpic.jpeg")
user3 = User.create(firstName: "Connor", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user3.photo.attach(io: File.open("./app/assets/images/people/pic4.jpeg"), filename: "profpic.jpeg")
user4 = User.create(firstName: "Brandon", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user4.photo.attach(io: File.open("./app/assets/images/people/pic5.jpeg"), filename: "profpic.jpeg")
user5 = User.create(firstName: "Daniel", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user5.photo.attach(io: File.open("./app/assets/images/people/pic6.jpg"), filename: "profpic.jpeg")
user6 = User.create(firstName: "Bryan", lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user6.photo.attach(io: File.open("./app/assets/images/people/pic7.png"), filename: "profpic.jpeg")


Review.create!(user_id: user1.id, business_id: biz1.id, rating: 5, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz4.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz5.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user2.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz1.id, rating: 5, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz5.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz4.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user3.id, business_id: biz1.id, rating: 5, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz4.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz3.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz5.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user4.id, business_id: biz5.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz3.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz1.id, rating: 5, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user5.id, business_id: biz1.id, rating: 4, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user5.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user5.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user5.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user5.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user6.id, business_id: biz1.id, rating: 5, body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz4.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz5.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz6.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user6.id, business_id: biz7.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
