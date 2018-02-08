$(function(){
  function buildHTML(message){
    var html = `.message
                  .upper-message
                    .upper-message__user-name
                      ${message.user_name}
                    .upper-message__date
                      ${message.created_at}
                  .lower-meesage
                    - if message.content.present?
                      %p.lower-message__content
                        ${message.content}`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html)
      $('.textbox').val('')
    })
   .fail(function(){
      alert('error');
    })
  })
});
