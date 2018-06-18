var list_url = "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";
var shop_list = {};
shop_list.list = [{
    name: "吹風機",
    price: "300"
  },
  {
    name: "麥克筆",
    price: "9000"
  },
  {
    name: "筆記型電腦",
    price: "13000"
  }
];

$.ajax({
  url: list_url,
  success: function (res) {
    shop_list.list = JSON.parse(res);
    showlist();
  }
});

var item_html = "<div id={{id}} class='item'><div class='item_name'>{{num}}.  {{item}}</div><div class='item_price'>{{price}}</div><div id={{del_id}} del_num = {{del_num}} class='del_button'>X</div></div>"

var total_html = " <div class='total_item'><div class='item_name'>總價</div><div class='item_price'>{{total_price}}</div></div>"

// fuc 更新購物清單
function showlist() {
  $("#item_list").html("");
  var total_price = 0

  for (var i = 0; i < shop_list.list.length; i++) {
    var item = shop_list.list[i];
    var item_id = "item_id" + i
    var del_item_id = "del_item_id" + i

    total_price += parseInt(item.price);
    // console.log(i)

    var current_item_html =
      item_html.replace("{{num}}", i + 1)
      .replace("{{item}}", item.name)
      .replace("{{price}}", item.price)
      .replace("{{id}}", item_id)
      .replace("{{del_id}}", del_item_id)
      .replace("{{del_num}}", i);
    $("#item_list").append(current_item_html);

    var current_total_html =
      total_html.replace("{{total_price}}", total_price);

    $("#" + del_item_id).click(
      function () {
        remove_item(parseInt($(this).attr("del_num")));
      }
    )
  }
  $("#item_list").append(current_total_html);

}
// 更新購物清單
showlist();

// 動態增加購物清單
$(".add_button").click(
  function () {
    shop_list.list.push({
      name: $("#item_name").val(),
      price: $("#item_price").val()
    })
    $("#item_name").val("")
    $("#item_price").val("")
    showlist();
  }
)

function remove_item(del_id) {
  shop_list.list.splice(del_id, 1);
  showlist();
}