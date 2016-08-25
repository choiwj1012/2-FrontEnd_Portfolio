$(document).ready(function(){

//이미지 슬라이더 첫번째
  function moveSlider(index){
    var imgSize = parseInt($(".sliderImg").css("width"));
    var willMoveLeft = -(index*imgSize);

    $("#sliderPanel").animate({
      left:willMoveLeft
    },"slow","easeInBounce");

    $(".sliderControlButton[data_index="+index+"]").addClass("active");
    $(".sliderControlButton[data_index!="+index+"]").removeClass("active");
  };

  $(".sliderControlButton").each(function(index){
    $(this).attr("data_index",index);
  }).click(function(){
    var index = $(this).attr("data_index");
    moveSlider(index);
  });

  var randomNumber = Math.round(Math.random()*2);
  moveSlider(randomNumber);

// 이미지 슬라이더 두번째
  function moveSlider2(index){
    var imgSize2 = parseInt($(".sliderImg2").css("width"));
    var willMoveLeft2 = -(index*imgSize2);

    $("#sliderPanel2").animate({
      left:willMoveLeft2
    },"slow","easeInBounce");

    $(".sliderControlButton2[data_index="+index+"]").addClass("active");
    $(".sliderControlButton2[data_index!="+index+"]").removeClass("active");
  };

  $(".sliderControlButton2").each(function(index){
    $(this).attr("data_index",index);
  }).click(function(){
    var index = $(this).attr("data_index");
    moveSlider2(index);
  });

  var randomNumber = Math.round(Math.random()*2);
  moveSlider2(randomNumber);
});
