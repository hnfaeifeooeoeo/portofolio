$('document').ready(function(){
  $(".item .boll").css("animation-delay","2000ms").css("opacity" , 1)
  
 
  $(".title").stop().animate({
    opacity: 1
  }, 1000,function(){
    setTimeout(() => {
        $(this).css("opacity", 0)
    }, 3000);
  })
  $(".blob").stop().animate({
    opacity: 1
  }, 2000,function(){
    setTimeout(() => {
        $(this).css("opacity", 0)
    }, 3000);
  })



  $(".boll").stop().animate({
    opacity: 1
  }, 2000,function(){
    setTimeout(() => {
        $(this).css("opacity", 0)
    }, 3000);
  })

})