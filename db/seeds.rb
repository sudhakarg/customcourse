# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = AdminUser.new
user.name = 'Dheeraj'
user.email = 'dheeraj@surabhilabs.in'
user.password = 'charge13'
user.password_confirmation= 'charge13'
user.save!

user = AdminUser.new
user.name = 'Sudhakar'
user.email = 'sudhakar@surabhilabs.in'
user.password = 'charge13'
user.password_confirmation= 'charge13'
user.save!