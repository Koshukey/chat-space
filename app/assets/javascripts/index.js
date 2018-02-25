$(function() {

  var user_search_list = $(".chat-group-form__field--right");

  function appendUser(user) {
    var html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>
               `
    user_search_list.append(html);
  };

  $(function() {
//$(function() {などはjsの即時関数 即時関数→、関数を定義すると同時に実行するための構文
    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
//valueメソッドでフォームの値を取得
      var href = window.location.href



      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(data) {
        var html = appendUser(data);
        $('chat-group-form__field--right').append(html);
      })

      .fail(function(){
        alert('通信に失敗しました');
      });

    });

  });

});
