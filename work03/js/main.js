$(function(){

  // header gnb menu
  $('.gnb > li > a').click(function(e){
    e.preventDefault();

    if($(this).siblings('.menuwrap').hasClass('active')){
      $('.menuwrap').removeClass('active');
    } else{
      $('.menuwrap').removeClass('active');
      $(this).siblings('.menuwrap').addClass('active');
    }
  });

  $(".menuwrap .last a").keydown(function(event){
     var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
         if(!event.shiftKey){
          $('.menuwrap').removeClass('active');
          // Shift + Tab 이벤트 v_gnb.mouseleave();
        }
     } 
  });
  $(".menuwrap .first a").keydown(function(event){
     var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
         if(event.shiftKey){
          $('.menuwrap').removeClass('active');
          // Shift + Tab 이벤트 v_gnb.mouseleave();
        }
     } 
  });


  // header service hovermenu
  $('header .ic_go').click(function(e){
    e.preventDefault();

    if($('.link_wrap').hasClass('on')){
      $('.link_wrap').removeClass('on');
    } else{
      $('.link_wrap').addClass('on');
    }
  });
  $('header .ic_lang').click(function(e){
    e.preventDefault();
    if($('.lang_wrap').hasClass('on')){
      $('.lang_wrap').removeClass('on');
    } else{
      $('.lang_wrap').addClass('on');
    }
  });

  $(".serv_wrap .last").keydown(function(event){
    var v_keyCode = event.keyCode || event.which;
     if(v_keyCode == 9){
        if(!event.shiftKey){
         $('.serv').removeClass('on');
       }
      } 
   });
 $(".serv_wrap .first").keydown(function(event){
    var v_keyCode = event.keyCode || event.which;
     if(v_keyCode == 9){
        if(event.shiftKey){
         $('.serv').removeClass('on');
       }
      } 
  });


  // 모바일메뉴
  $('.m_menu_btn').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on');
    $('header .gnb').toggleClass('on');
  });


  var solution = new Swiper(".solution", {
      loop:true,
      pagination: {
        el: ".swiper-pagination2",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".slide_btn.next",
        prevEl: ".slide_btn.prev",
      },
    });


    $('.sc_solution .total').text(solution.slides.length - 2)

    solution.on('slideChange', function () {
      $('.sc_solution .curr').text(this.realIndex+1)
    });


    prdArr = [
      './img/remote.png',
      './img/make.png',
      './img/view.png',
      './img/twin.png',
      './img/track.png',
    ]

  var products = new Swiper(".products", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".products .pagebtn",
        clickable: true,
        renderBullet: function (index, className) {
          return '<li class="' + className + '"><img src=" '+prdArr[index]+'"></li>';
        },
      },
    });

})