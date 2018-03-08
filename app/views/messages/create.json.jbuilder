json.content  @message.content
json.created_at  @message.created_at.strftime('%Y/%m/%d %R')
#(%Y/%m/%d %R)って''これ抜かしてエラーさまよってた 文字列だから''つけないと....
json.user_name  @message.user.name
json.image  @message.image.url
json.id     @message.id
