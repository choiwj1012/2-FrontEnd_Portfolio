$(document).ready(function(){

//aboutme 페이지 효과
  $("article.aboutMeArt").click(function(){
    $(".blacklayer").show();
    $(".mainlayer").show().html(' <img src=" '+ $(this).find("img").prop("src") +' " alt=""> ');
    return false;
  });
  $(".blacklayer").click(function(){
    $(this).hide();
    $(".mainlayer").hide();
  });
  $(".mainlayer").click(function(){
    $(this).hide();
    $(".blacklayer").hide();
  });

});
