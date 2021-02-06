class AddReferenceMatchToTournament < ActiveRecord::Migration[6.0]
  def change
    add_reference :matches, :tournament, index: true, foreign_key: {on_delete: :cascade}
  end
end
