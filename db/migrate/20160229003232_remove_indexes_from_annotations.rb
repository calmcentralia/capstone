class RemoveIndexesFromAnnotations < ActiveRecord::Migration
  def change
    remove_column :annotations, :start_idx, :integer
    remove_column :annotations, :end_idx, :integer
    add_column :annotations, :line_number, :integer, null: false
  end
end
