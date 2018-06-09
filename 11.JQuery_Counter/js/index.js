var num = 12;
var waittime = 0;

function computee(n) {
  num = num + n;
  $(".number").text(num);
}

function check() {
  if (num < 10) {
    $(".info").text("賣的夯巴巴");
    $(".info").css("color", "#f24");
    $(".info").css("border-bottom", "solid 8px #f24");
    $(".no_stock").addClass("no_stock_open");
    $(".no_stock").text("你沒貨了QQ 快補");
  } else if (num < 20) {
    $(".info").text("賣的剛剛好");
    $(".info").css("color", "#fff");
    $(".info").css("border-bottom", "solid 8px #fff");
    $(".no_stock").removeClass("no_stock_open");
    $(".no_stock").removeClass("cry_cry_open");
  } else {
    $(".info").text("賣的慘兮兮");
    $(".info").css("color", "#f91");
    $(".info").css("border-bottom", "solid 8px #f91");
    $(".no_stock").addClass("cry_cry_open");
    $(".no_stock").text("你要倒閉了，請節哀");
  }
}






$(".add").click(
  function () {
    computee(1);
    check();
  }
)

$(".minus").click(
  function () {
    computee(-1);
    check();
  }
)

if (waittime == 0) {
  $(".no_stock").mouseenter(
    function () {
      $(".no_stock").text("請點按撥打電話請求救援");
    }
  )
}


$(".no_stock").click(
  function () {
    $(".no_stock").text("電話撥打中");
    setInterval(function () {
      waittime = waittime + 1;
      $(".no_stock").text("電話撥打中..." + waittime);
    }, 1000)
  }
)