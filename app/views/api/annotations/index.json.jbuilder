

json.array!(@annotations) do |annotation|
  json.line_number annotation.line_number
  json.id annotation.id
  json.body annotation.body
  json.username annotation.user.username
  json.image_url annotation.image_url
  if current_user
    if annotation.user.id == current_user.id
      json.is_correct_user true
    else
      json.is_correct_user false
    end
  end
end
