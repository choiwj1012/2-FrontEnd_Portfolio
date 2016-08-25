$(document).ready(function(){

  var duration = 300;
      $("img").on("mouseover",function(){
        $(this).stop(true).animate({
          borderWidth : "10px",
          color : "#ae5e9b"
        },duration,"easeOutSine");
      }).on("mouseout",function(){
        $(this).stop(true).animate({
          borderWidth:"1px",
          color:"#ebc000"
        },duration,"easeOutSine");
  });
});
