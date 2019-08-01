# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
User.destroy_all

100.times do 
    Business.create(
        business_name: Faker::Restaurant.name,
        address: Faker::Address.full_address,
        longitude: Faker::Address.longitude,
        latitude: Faker::Address.latitude,
        number: Faker::PhoneNumber.phone_number,
        website: Faker::Internet.url,
        price: Faker::Number.between(from: 1, to: 4),
        category: 'food'
    )
end

User.create(firstName: 'Spencer', lastName: "Tassone", 
            email: 'Spencerwilliamtassone@gmail.com', 
            password: "password", location: "10025")

10.times do
    User.create(
        firstName: Faker::Name.first_name,
        lastName: Faker::Name.last_name,
        email: Faker::Internet.email,
        location: Faker::Address.zip_code,
        password: 'password'
    )
end

