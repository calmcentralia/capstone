

json.array!(@annotations) do |annotation|
  json.line_number annotation.line_number
  json.id annotation.id
end
