$(function() {

  function appendUser(user) {
    var html = `
                <div class="chat-group-form__field--right--search">
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>
               </div>
               `
   return html;
  };

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

      .done(function(users) {
        $(".user-search-result").empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            var html = appendUser(user);
            console.log(html)
            $(".user-search-result").append(html);
          });
        }
      })

      .fail(function(){
        alert('通信に失敗しました');
      });

    });

});

  function clickHTML(user){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value="${user.attr("data-user-id")}">
                  <p class='chat-group-
                  user__name'>${user.attr("data-user-name")}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
               </div>`
    return html;
   };
//attrメソッドによって引数に指定した属性の値を取得することができる
//HTML5ではdata-*="value"の形式で属性名にプライベートな値を設定できるカスタムデータ属性の仕様と、そのカスタムデータ属性にJavaScriptからアクセスするAPIが定義された



  $(document).on("click",".user-search-add", function() {
//追加ボタンが押された時
    $input = $(this);
    var add_user_html = clickHTML($input);
    $("#search-users").append( add_user_html);
//#search-usersの下にhtmlを追加
      $input.parent().remove();
      $.ajax({
        type: 'GET',
        url: '/users',
        dataType: 'json',
      })
      .done(function(data){
      })
      .fail(function(){
         alert('追加に失敗しました');
      })
  });




