
json.array!(@comments) do |comment|
  json.body comment.body
  json.username comment.user.username
  json.image_url comment.image_url
end
