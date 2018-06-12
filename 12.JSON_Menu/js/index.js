var menu = [];
menu = ["東坡肉炒飯","蔥爆羊肉","花式炒鮭魚"];
menu.push("新疆烤豬肉");

for(var i=0; i< 4; i++){
  $("#menu").append("<li class = 'dishes'>" +i +"." +menu[i] +"</li>");
}

var shop = {}

shop.name = "阿榮便當店"
shop.phone = "01232131231"
shop.addr = "中和市永和路 66 巷"
shop.menu = menu

$("#shop").append("<li class = 'dishes'>" +"商店名稱：" +shop.name +"</li>");
$("#shop").append("<li class = 'dishes'>" +"商店電話：" +shop.phone +"</li>");
$("#shop").append("<li class = 'dishes'>" +"商店地址：" +shop.addr +"</li>");



var menu_html="<ul>";

for(var i=0;i<shop.menu.length;i++){
   menu_html+="<li class='dishes'>"+i+"."+shop.menu[i]+"</li>";
}
menu_html+="</ul>";

//一次把我們組合好的html加到裡面去
$("#shop").append("<li>"+"品項與菜單: "+""+menu_html+"</li>");