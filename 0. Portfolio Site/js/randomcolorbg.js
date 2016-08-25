$(document).ready(function(){

  //포트폴리오 배경색 랜덤변경
  $(".move").on("mouseenter",function(){
      var $bgSelector = $("div.portfolio>article");
      var $windowSize = $(window).width();

      if($windowSize>=1022){
        $("div.portfolio").css({backgroundColor:"#000",height:"1000px"});
      }else if($windowSize<1022){
        $("div.portfolio").css({backgroundColor:"#000",height:"1200px"});
      }

      for(var i=1; i<13; i++){
        var random = Math.round(Math.random()*0xffffff).toString(16);
        $($bgSelector).eq(i).css({
          backgroundColor : "'#"+random+"'"
        });
      }
      $(".move").not(this).stop().animate({
        opacity : 0.2
      },100);
  }).on("mouseleave",function(){
    $("div.portfolio").css({backgroundColor:"#fff",height:"0"});
    $(".move").stop().animate({
      backgroundColor : "#00587c",
      opacity : 1
    },100);
  });

});
