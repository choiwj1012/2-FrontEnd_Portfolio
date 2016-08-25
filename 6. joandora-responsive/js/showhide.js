$(document).ready(function(){
  var $showhide = $("#showhide");

  $(window).on("resize",function(){
    var $screenWidth = $(window).width();
    if($screenWidth>0 && $screenWidth<=400){
      $showhide.addClass("showhide");
    }else if($screenWidth>400){
      $showhide.removeClass("showhide");
    };
  });
});
