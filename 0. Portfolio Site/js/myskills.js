$(document).ready(function(){
  $("#showSkills").click(function(){
    var $list = $("#resume1Sec2 progress");
    var $listLength = $list.length;
    var eqArray = [70,80,90,100,70,50,60,70,50,60,30,80,100,60,70,100,80,50,30]

    for(var i=0;i<$listLength;i++){
      $list.eq(i).stop().animate({
        value : eqArray[i]
      },3000);
    }
  })
})
