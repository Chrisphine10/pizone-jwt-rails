class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.string :path, null: false
      t.string :name, null: false
      t.references :user, null: false, foreign_key: true
      t.references :impression, null: false, foreign_key: true

      t.timestamps
    end
  end
end
