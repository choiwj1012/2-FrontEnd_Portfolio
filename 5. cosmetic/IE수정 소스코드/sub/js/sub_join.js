$(document).ready(function(){

  $("#allAgree").change(function(){
    if(this.checked){
      $(".allAgree").prop("checked",true);
    }else{
      $(".allAgree").prop("checked",false);
    };
  });

  $("input").focus(function(){
      $(this).css("background","#16f35f");
  });

  $("input").blur(function(){
      $(this).css("background","white");
  });
});
