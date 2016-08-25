$(document).ready(function(){

  $(".bg").on("mouseenter",function(){
    $(this).children("img").stop().animate({
      opacity : 0.5
    },1000);
  }).on("mouseleave",function(){
      $(this).children("img").stop().animate({
      opacity : 0
    },1000);
  })

  $(".outer").on("mouseenter",function(){
    $(this).children("a").stop().animate({
      opacity : 0
    },1000);
  }).on("mouseleave",function(){
    $(this).children("a").stop().animate({
      opacity : 1
    },1000);
  });

});
