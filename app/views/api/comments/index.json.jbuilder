
json.array!(@comments) do |comment|
  json.body comment.body
  json.username comment.user.username
  json.image_url comment.image_url
  if current_user
    json.is_correct_user   comment.user.id == current_user.id
  end 
end
