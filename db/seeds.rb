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


user1 = User.create(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user2 = User.create(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user3 = User.create(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')
user4 = User.create(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, email: Faker::Internet.email,
    location: Faker::Address.zip_code, password: 'password')


Review.create!(user_id: user1.id, business_id: biz1.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz2.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user1.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user2.id, business_id: biz1.id, rating: Faker::Number.between(from: 3, to: 5), body: "I had a dream last night that a hamburger was eating me.")
Review.create!(user_id: user2.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz2.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user2.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user3.id, business_id: biz1.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz3.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user3.id, business_id: biz3.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 30, supplemental: true, random_words_to_add: 4))

Review.create!(user_id: user4.id, business_id: biz3.id, rating: Faker::Number.between(from: 1, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz1.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz1.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))
Review.create!(user_id: user4.id, business_id: biz2.id, rating: Faker::Number.between(from: 3, to: 5), body: Faker::Hipster.sentence(word_count: 300, supplemental: true, random_words_to_add: 4))

