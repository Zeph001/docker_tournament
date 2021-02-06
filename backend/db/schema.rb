# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_21_202203) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.bigint "team_1"
    t.bigint "team_2"
    t.integer "team_1_score", default: 0
    t.integer "team_2_score", default: 0
    t.datetime "starttime", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tournament_id"
    t.index ["tournament_id"], name: "index_matches_on_tournament_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "location"
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams_tournaments", id: false, force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "tournament_id"
    t.index ["team_id"], name: "index_teams_tournaments_on_team_id"
    t.index ["tournament_id"], name: "index_teams_tournaments_on_tournament_id"
  end

  create_table "teams_users", force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "user_id"
    t.string "team_role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_teams_users_on_team_id"
    t.index ["user_id"], name: "index_teams_users_on_user_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "starttime", null: false
    t.integer "fee", default: 0
    t.integer "format"
    t.bigint "admin", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", limit: 20
    t.string "email"
    t.string "password_digest"
    t.integer "rank"
    t.string "timezone", default: "UTC"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "matches", "teams", column: "team_1", on_delete: :nullify
  add_foreign_key "matches", "teams", column: "team_2", on_delete: :nullify
  add_foreign_key "matches", "tournaments", on_delete: :cascade
  add_foreign_key "teams_users", "teams", on_delete: :cascade
  add_foreign_key "teams_users", "users", on_delete: :restrict
  add_foreign_key "tournaments", "users", column: "admin", on_delete: :restrict
end
