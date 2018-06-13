$(".i5").click(
  function(){
   $(".phonename").text($(this).text());
   $(".screen").css("height", "");
   $(".phone").css("width", "");
  }
)
$(".i5s").click(
  function(){
   $(".phonename").text($(this).text());
   $(".screen").css("height", "420px");
   $(".phone").css("width", "250px");
  }
)
$(".i6").click(
  function(){
   $(".phonename").text($(this).text());
   $(".screen").css("height", "440px");
   $(".phone").css("width", "270px");
  }
)
$(".i6s").click(
  function(){
   $(".phonename").text($(this).text());
   $(".screen").css("height", "480px");
   $(".phone").css("width", "300px");
  }
)

var page_move = 0;
$(".screen").click(
  function(){

    page_move += 1
    $(".pages").css("left" , "-"+page_move*100 +"%");
    if(page_move == 2){
      page_move = -1;
    }
  }
)
$(".button").click(
  function(){
    $(".pages").css("left","");
    page_move = 0;
  }
)

$(".turn").click(
  function(){
    $(".phone").css("transform", "rotate(360 deg)") ;
  }
)


$(".wiggle").click(
  function(){
    wig_time = 0;
    wiggle_audio.play();
  }
)

var wig_time = 21;
var wiggle_audio=new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");

setInterval(function(){
  if(wig_time < 21){
    wig_time += 1;
    // console.log(wig_time)
    if(wig_time%2 == 0){
      $(".phone").css("transform", "translateX(30px)");
    }else{
      $(".phone").css("transform", "translateX(-30px)");
    }
    if(wig_time == 21){
      $(".phone").css("transform", "translateX(0px)");
    }
    }
}
,60)