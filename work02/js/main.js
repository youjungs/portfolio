$(function() {

  $(window).scroll(function(){
    curr = $(window).scrollTop();
    if(curr >= 100){
        $('header').addClass('bg')
    }else{
        $('header').removeClass('bg')
    }
    
  })

  $('header .gnb li:first-child').mouseover(function(){
    $('header').addClass('bg');
    $('.submenu').stop().slideDown();
    $('.all_bg').addClass('on');
  },)
  $('header').mouseleave(function(){
    $('.submenu').stop().slideUp();
    $('.all_bg').removeClass('on');
  })

  //intro
  const intro = gsap.timeline({})

  intro.from('.sc_vis .txt_wrap *',{
    opacity:0,
    yPercent:10,
    stagger:0.2,
    // duration:0.5
  })
  .to('.sc_vis .img_wrap img',{
    scale:1.1,
    duration:5
  })

  gsap.fromTo('.sc_press .logo_wrap li',{
    //from
    opacity:0,
    yPercent:10
  },{
    //to
    scrollTrigger:{
      trigger:".sc_press",
      start:'top 80%',
      end:'top bottom',
      // markers:true,
    },
    yPercent:0,
    opacity:1,
    stagger:0.1
  })

  beauty = gsap.timeline({
    scrollTrigger:{
      trigger:".sc_beauty",
      start:'top top',
      end:'+=5000',
      // markers:true,
      scrub:0.3,
      pin:true,
    }
  });

  beauty.fromTo('.sc_beauty .txt_wrap',{
    yPercent:80
  },{
    yPercent:-50,
    opacity:0,
    duration:1
  })
  .to('.sc_beauty .img_wrap',{
    xPercent:-118.7,
    duration:9
  },0.4)



  gsap.to('.sc_beauty .motion',{
    scrollTrigger:{
      trigger:".sc_new",
      start:'top 100%',
      end:'+=1000',
      // markers:true,
      scrub:0.3,
    },
    y:'100vh',
  })

  const beauty2 = gsap.timeline({
    scrollTrigger:{
      trigger:".sc_new",
      start:'top top',
      end:'+=5000',
      // markers:true,
      scrub:0.3,
      pin:true,
    }
  });

  beauty2.to('.motion',{'visibility':'hidden'})
  .to('.du_ori',{'visibility':'visible'},0)
  .to('.du',{'visibility':'visible'},0.1)
  .to('.du1',{rotation:30,duration:5},0.1)
  .to('.du2',{rotation:60,duration:5},0.1)
  .to('.du3',{rotation:90,duration:5},0.1)
  .to('.du4',{rotation:120,duration:5},0.1)
  .to('.du5',{rotation:150,duration:5},0.1)
  .to('.du6',{rotation:180,duration:5},0.1)
  .to('.du7',{rotation:210,duration:5},0.1)
  .to('.du8',{rotation:240,duration:5},0.1)
  .to('.du9',{rotation:270,duration:5},0.1)
  .to('.du10',{rotation:300,duration:5},0.1)
  .to('.du11',{rotation:330,duration:5},0.1)
  .to('.duouther img',{y:'100vw',duration:5})
  .to('.sc_new .logo_wrap',{opacity:0,duration:1})
  .to('.sc_new .new_bg',{yPercent:-100,opacity:1, duration:1})
  .to('.sc_new .btn_new',{'visibility':'visible',opacity:1,duration:1})


  txtArr = [
    'IG Filter Duo IG Filter Duo IG Filter Duo',
    'Re-touch Re-touch Re-touch',
    'Re-wind Re-wind Re-wind Re-wind',
    'Re-mix Re-mix Re-mix Re-mix',
    'Brilliant Kabuki Brush',
    'Brilliant Powder Brush',
    'Re-fine Re-fine Re-fine',
  ];
  $('.swiper-slide').hover(function(){
    //data-swiper-slide-index="0"
    $('.sc_best .hidetxt',{'visibility':'visible',opacity:1})
    idx = $(this).data('swiper-slide-index');

    $('.hidetxt span').text(txtArr[idx]);
  })

  var best = new Swiper(".bestseller", {
      slidesPerView: 3,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

  gsap.from('.sc_about .title_wrap',{
      scrollTrigger:{
        trigger:".sc_about",
        start:'top 80%',
        end:'30% 50%',
        // markers:true,
        scrub:0.3,
      },
      yPercent:30,
      opacity:0,
      duration:3

  })
  gsap.from('.sc_about .thumb02 img',{
      scrollTrigger:{
        trigger:".sc_about",
        start:'40% 80%',
        end:'bottom bottom',
        // markers:true,
        scrub:0.3,
      },
      yPercent:30,
      opacity:0,
      duration:3

  })


  var sns = new Swiper(".link_insta", {
      slidesPerView: 'auto',
      spaceBetween: 50,
      scrollbar: {
          el: ".swiper-scrollbar",
          // clickable: true,
        },

    });

    footH = $('footer').outerHeight();
    $('main').css({'margin-bottom':footH});

})