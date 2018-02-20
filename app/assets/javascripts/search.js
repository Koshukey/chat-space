$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
//valueメソッドでフォームの値を取得

    $.ajax({
        type: 'GET',
        url: '/products/search',
        data: { keyword: input },
        dataType: 'json'
    })

  });
});
