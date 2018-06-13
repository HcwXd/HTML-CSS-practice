var todo_html = "<li class='{{class}}'>{{num}}. {{name}} ({{date}})</li>";

var data_url = "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";

var tododata;

$.ajax({
  url: data_url,
  success: function (res) {
    tododata = JSON.parse(res);
    for (var i = 0; i < tododata.length; i++) {
      var item = tododata[i];
      var now_class = (item.done == false) ? "done" : "";

      var now_data =
        todo_html.replace("{{num}}", i + 1)
        .replace("{{name}}", item.name)
        .replace("{{date}}", item.date)
        .replace("{{class}}", now_class);
      $("#listitem").append(now_data)
    }
  }
})