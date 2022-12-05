# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Seeding..."

# 10.times do
#   User.create(
#     name: Faker::Name.name,
#     username: Faker::Internet.unique.username,
#     password: "12345"
#   )
# end

# 10.times do |i|
#   Concert.create(
#     name: Faker::Company.name, 
#     performer: Faker::Artist.name, 
#     date: Faker::Date.between(from: 2.days.from_now, to: '2025-09-10'), 
#     time: Faker::Time.forward(days: 25), 
#     city: Faker::Address.city, 
#     state: Faker::Address.state_abbr,
#     total_tickets: Faker::Number.within(range: 25..200) )
# end

puts "Seeding done!"