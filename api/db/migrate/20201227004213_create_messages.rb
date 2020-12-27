class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :username
      t.text :content
      t.string :image_path

      t.timestamps
    end
  end
end
