$("document").ready (function(){
    $(".tabmenu ul li").eq(1).addClass("on")
    $(".tabmenu .tab-content").eq(1).show()
    $(".tabmenu ul li").click(function(){
     let k = $(this).index();
      $(".tabmenu ul li").removeClass("on").eq(k) .addClass("on")
      $(".tab-wrap .tab-content").hide().eq(k).show();

    })
  $(function(){
    $("button").click(function(){
      $(".modal").fadeIn();
    });
    $(".modal_content").click(function(){
      $(".modal").fadeOut();
    })
  })
      

})