# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

venues = Venue.create([{ name: 'venue one' }, { name: 'venue two' }])

events = Event.create([{ name: 'event one', venue_id: venues.first}, { name: 'event two', venue_id: venues.last }])

users = User.create([{ user_name: 'user one', password: 'user one'}, { user_name: 'user two', password: "user two" }, {email: 'zac.willmington@gmail.com', password: "password"}])

ticket_classes = TicketClass.create([{ name: 'ticket one', event_id: events.first}, { name: 'ticket two', event_id: events.last}])