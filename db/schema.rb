# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_20_231604) do

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.integer "venue_id"
    t.text "description"
    t.string "url"
    t.datetime "start"
    t.datetime "end"
    t.string "status"
    t.string "currency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo"
    t.integer "user_id"
  end

  create_table "events_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.index ["event_id"], name: "index_events_users_on_event_id"
    t.index ["user_id"], name: "index_events_users_on_user_id"
  end

  create_table "ticket_classes", force: :cascade do |t|
    t.string "name"
    t.integer "event_id"
    t.text "description"
    t.decimal "cost"
    t.decimal "fee"
    t.boolean "free"
    t.integer "maximum_quantity"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "age_restriction"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
