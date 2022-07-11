$("document").ready(function(){
           

    $(".header .background-item .background-nav ul li").eq(0).addClass("on")
    $(".header .background-item .background-nav ul li").click(function(){
        let i = $(this).index();
        $(".header .background-item .background-nav ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".header > a").click(function(e){
        e.preventDefault()
        if($(".header .background-item").is(":animated")){
            return;
        }
        let i = $(this).index()-1;
        i = $(".header > a").index(this);

        if(i == 0){
            //왼쪽클릭
            count--;
            if(count < 0){
                count = $(".background-img").length - 1;
            }
        }else{
            count++;
            if(count > $(".background-img").length - 1){
                count = 0;
            }
            //오른쪽 클릭
        }
        console.log(count)
        $(".header .background-item").stop().animate({
            left: -100 * count + "%"
        }, 1000)
    })
    let timer = setInterval(function(){
        count++;
         if(count > $(".background-img").length - 1 ){
             count = 0;
         }
         $(".header .background-item").stop().animate({
             left: -100 * count + "%"
         }, 1000)
    }, 3000)

    $(".header > a").mouseover(function(){
        clearInterval(timer)
    })
    $(".header > a").mouseout(function(){
        timer = setInterval(function(){
            count++;
                if(count > $(".background-img").length - 1){
                    count = 0;
                }
                $(".header .background-item").stop().animate({
                    left: -100 * count + "%"
                }, 1000)
        }, 3000)
    })


    $(function(){
        $('.single-item').slick();
    })
    let count = 0;
    setInterval(function(){
        count++;
        if(count > $ (".content ul li").length-1){
            count = 0;
        }
        $(".item").css("background-color", back_color[count])
        $(".content ul li").hide().eq(count).show()
 
        //console.log(count,$ (".content ul li").length-1)
    }, 3000)
    $(".next-wrap .business-slide").bxSlider({
        captions: true,
        autoControls: true,
        auto: true,
        autoDelay: 6000,
        startSlide:2,
        minSlides:1,
        maxSlides:1,
        mode:"fade",
        mode:"vertical"
    })
})