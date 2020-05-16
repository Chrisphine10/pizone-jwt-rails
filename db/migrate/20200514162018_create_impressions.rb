class CreateImpressions < ActiveRecord::Migration[6.0]
  def change
    create_table :impressions do |t|
      t.boolean :impression
	  t.integer :views
	  t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
