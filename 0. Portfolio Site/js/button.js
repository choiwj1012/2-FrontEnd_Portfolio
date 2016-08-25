$(document).ready(function(){

  $("#logo h1").click(function(){
    $("section>div").removeClass("on");
    $("#main").addClass("on");
  });

  $("nav li").click(function(){
    var i = $(this).index();
    if(i>=0 && i<6){
      if(i==3){
        var url = "http://choiwj851012.blog.me/"
        window.open(url,"_blank");
        return false;
      }
      $("section>div").removeClass("on");
      $("section>div").eq(i+1).addClass("on");
    }
  });

  $(".gnb").click(function(){
    var i = $(this).data("name");
    $("section>div").removeClass("on");
    $("section>div").eq(i).addClass("on");
  });

  $(".blog").click(function(){
    var url = "http://choiwj851012.blog.me/"
    window.open(url,"_blank");
  })

});
