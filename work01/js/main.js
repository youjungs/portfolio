$(function(){
    imglist01 = gsap.fromTo('.imglist_wrap .list01',{
        //전
        yPercent:-100
    },{
        //후
        duration:3,
        yPercent:-50
    })
    imglist01.pause()

    imglist02 = gsap.fromTo('.imglist_wrap .list02',{
        //전
        yPercent:0
    },{
        //후
        duration:5,
        yPercent:-100
    })
    imglist02.pause()


    $('.menu_btn').click(function(e){
        e.preventDefault();
        imglist01.restart()
        imglist02.restart()
        $('body').addClass('hidden')
        $('.menu_wrap, header').addClass('on');
    })
    $('.close_btn').click(function(e){
        e.preventDefault();
        $('body').removeClass('hidden')
        $('.menu_wrap, header').removeClass('on');
    })

    $(window).scroll(function(){
        curr = $(window).scrollTop();
        if(curr >= 100){
            $('header').addClass('bg')
        }else{
            $('header').removeClass('bg')
        }
        
    })

    $("body").on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        curr = $(window).scrollTop();

        if(curr> 100) {
            //스크롤값을 가져온다.
            if(wheel>0){
            //스크롤 올릴때
            $('header').removeClass('hide')
            } else {
            //스크롤 내릴때
            $('header').addClass('hide')
            }
        }
    });

    // main_vis

    intro = gsap.timeline({

        scrollTrigger:{
            trigger:".visbg",
            start:'1% top',
            end:'50% 50%',
            // markers:true,
            pin:true,
        }
    });

    intro.to('.main_title',{opacity:0})
    .to('.main_vis .bg01',{scale:1, yPercent:0, duration:1},1)
    .to('.main_vis .bg02',{scale:1, yPercent:0, duration:1},1)//초
    .to('.intro_wrap > a',{
        'visibility':'visible',
        opacity:1,
        stagger:0.2
    })

    gsap.to('.hidden_box',{

        scrollTrigger:{
            // trigger:".hidden_box",
            trigger:".main_vis",
            start:'70% 70%',
            end:'bottom 90%',
            // start:'top 100%',
            // end:'bottom 50%',
            // markers:true,
            scrub:0.2,
        },
        height: '400px',
        yPercent:20
    });


    thumb = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_service",
            start:'top top',
            end:'50% 50%',
            // markers:true,
            scrub:0.5,
        },
    })

    thumb.to('.service_bg',{y:100,duration:3},1)
    thumb.to('.sc_service .thumb01',{yPercent:-20,duration:3},1)
    thumb.to('.sc_service .thumb03',{yPercent:-20,duration:3},1)

    gsap.to('.enjoy_bg',{
        scrollTrigger:{
            trigger:".sc_enjoy",
            start:'top 80%',
            end:'bottom 80%',
            // markers:true,
            scrub:0.5,
        },
        yPercent:30,
        duration:5

    })


    var infra_txt = new Swiper(".infra_txt", {
        loop:true,
        effect:'fade',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        touchRatio:0,
    });
    var infra_img = new Swiper(".infra_img", {
        loop:true,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        }
    });
    

    infra_img.controller.control = infra_txt;
    infra_txt.controller.control = infra_img;


    gsap.to('.sc_place .sc_title',{
        scrollTrigger:{
            trigger:".sc_place",
            start:"40% 90%",
            end:"bottom bottom",
            // markers:true,
            scrub:0.5
        },
        yPercent:-30
    })



    var loca_img = new Swiper(".loca_img", {
        loop:true,
        parallax: true,
    });
    var loca_txt = new Swiper(".loca_txt", {
        loop:true,
        effect:'fade',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        touchRatio:0
    });

    loca_img.controller.control = loca_txt;
    loca_txt.controller.control = loca_img;


    var gallery = new Swiper(".gallery", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        loop:true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

      });

      var arch_txt = new Swiper(".arch_txt", {
        loop:true,
        effect:'fade',
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        touchRatio:0,
    });
    var arch_img = new Swiper(".arch_img", {
        loop:true,
        parallax: true,
        // speed:2000
    });

    arch_txt.controller.control = arch_img;
    arch_img.controller.control = arch_txt;


    news = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_news",
            start:'top 100%',
            end:'bottom bottom',
            // markers:true,
            scrub:0.5,
        }
    })

    news.to('.sc_title .txt01',{yPercent:100, duration:3},1)
    .to('.sc_title .txt02',{yPercent:-100, duration:3},1)


    $('.sc_select').mousemove(function(e){

        xVal = e.pageX - $('.select_bg').width()/2;
    
        gsap.to('.select_bg img',{
          x:-xVal/30
        })
      })
    $('.sc_select .thumb_wrap').mousemove(function(e){

        xVal = e.pageX - $('.thumb02').width()/2;
    
        gsap.to('.thumb02 .img_wrap img',{
          x:-xVal/30
        })
      })
})