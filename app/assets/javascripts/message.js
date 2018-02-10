$(function(){
  function buildHTML(message){
//functionによって関数の宣言 buildHTMlは関数の名前 messageは引数
//function 関数名 (引数){関数を定義する文}
    var html = `<div class="upper-message">
                  <div class="upper-message__user-name">
                  ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                  ${message.created_at}
                  </div>
                </div>
                  <div class="lower-message">
                  <p class="lower-message__content">
                  ${message.content}
                  </p>
                </div>`

    return html;
//htmlという変数を作った
//代入するものは複数行に渡るのでテンプレートリテラル記法によって書く
  }
  $('#new_message').on('submit', function(e){
//submitイベントが起きた時
    e.preventDefault();
    var formData = new FormData(this);
//FormDataオブジェクトクラスのインスタンスを作成
//FormDataオブジェクトはフォームのデータの送信に使用できる
//ここではフォームの情報を取得するのに使う
//イベントで設定したfunction内でthisを利用した場合はそのthisはイベントが発生したDOM要素を示す ここではnew_messageというIDがついたフォームの情報を取得している
    var href = window.location.href
//hrefという変数を作った
//windowオブジェクトとは画面上に表示されている全てのオブジェクトの親となるオブジェクト
//locationオブジェクトはwindowオブジェクションの一部であり、window.locationプロパティを通じてアクセスできる。locationオブジェクトのプロパティの一つであるhrefはurl全体という意味
    $.ajax({
//jqueryのAjaxメソッドを使用
//ajaxメソッドによってJavascriptからhttpリクエストを発行できる
      url: href,
//urlによって通信先のURLを指定、デフォルトでは現在のページ
      type: "POST",
//通信に使用するhttpメソッド
      data: formData,
//上で宣言された変数であるformDataを送信するということ
      dataType: 'json',
//応答データをJson形式にするということ
      processData: false,
      contentType: false
    })
    .done(function(data){
//doneメソッドはjqXHRオブジェクトによって定義されている
//帰ってきたJSONをdoneメソッドで受け取る
//即時関数の第一引数になっているdataとは？サーバーから返ってくるデータのこと（今回はjbuilderで作成したcreate.json.jbuilderのデータのこと）
      var html = buildHTML(data);
//htmlという変数にcreate.json.jbuilderのデータを代入する
      $('.messages').append(html)
//appendメソッドとは？→$(‘セレクタ’).append(‘追加するもの’);
//val()はvalue属性を取得、操作することができる
//引数ありで呼ぶことで中身をその値に帰ることができる
    })
   .fail(function(){
//サーバーエラー(通信に失敗した時)fail関数が呼ばれる
      alert('error');
    })
  })
});
