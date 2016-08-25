$(document).ready(function(){

//메인 네비게이션 show & hide
  var $nav2 = $(".mainHeaderNav2 ul")
  var $nav2List = $(".mainHeaderNav2 ul li")
  var $showHide = $("#showHide");
  $showHide.hide();
  $nav2List.hide();
  $nav2.mouseenter(function(){
    $showHide.show();
    $nav2List.show();
  }).mouseleave(function(){
    $showHide.hide();
    $nav2List.hide();
  });

//사이드 네비게이션 효과
  var $sideNav = $("#sideNav");

    $sideNav.click(function(){

      var $sideNavCssLeft = parseInt($sideNav.css("left"));
      if($sideNavCssLeft>=-300 && $sideNavCssLeft<=-200){
        $(this).animate({
          left : -50
        },1000,"easeInBounce");
      }else if($sideNavCssLeft<=-40 && $sideNavCssLeft>=-80){
        $(this).animate({
          left : -250
        },1000,"easeOutBounce");
      };
    });

    var $sideNavCssTop = parseInt($sideNav.css("top"));
    $(window).on("scroll",function(){
      var scv = $(window).scrollTop();
      $sideNav.stop().animate({top:scv + $sideNavCssTop + "px"},1000);
    });

//헤더 네비게이션 고정
  $(".mainHeaderNav2").each(function(){

  var $window = $(window);
  var $fixedHeader = $(this);
  var headerOffsetTop = $fixedHeader.offset().top;

  $window.on("scroll",function(){
      if($window.scrollTop()>headerOffsetTop){
          $fixedHeader.addClass("sticky");
      }else{
          $fixedHeader.removeClass("sticky");
      };
    });
    $window.trigger("scroll");
  });
});
