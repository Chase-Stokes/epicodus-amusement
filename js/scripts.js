$(document).ready(function(){
  $("#heightForm").submit(function(event){
    event.preventDefault();
    const height = parseInt($("#height").val());
    if (height >= 64) {
      $(".tall").show();
      $(".everyone").show();
      $(".short").hide();
    } else if (height >= 52) {
      $(".everyone").show();
      $(".tall").hide();
      $(".short").hide();
    } else {
      $(".everyone").show();
      $(".short").show();
      $(".tall").hide();
    }
  })
})