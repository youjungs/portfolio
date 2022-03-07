$(function(){
    
    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.cursor',{
            x: xVal,
            y: yVal,
        })
    })


    intro01 = gsap.timeline({
        scrollTrigger:{
            trigger:".intro01",
            start:'top top',
            end:'+=3000',
            // markers:true,
            scrub:0.3,
            pin:true
        }
    })
    intro01.to('.intro01 .scroll', {opacity:0})
    .to('.intro01 .txt01',{opacity:1})
    .to('.intro01 .txt01',{opacity:0,yPercent:-100})
    .to('.intro01 .txt02',{opacity:1})
    .to('.intro01 .txt02',{opacity:0,yPercent:-100})
    .to('.intro01 .txt03',{opacity:1})
    .to('.intro01 .txt03',{opacity:0,yPercent:-100})

    intro02 = gsap.timeline({
        scrollTrigger:{
            trigger:".intro02",
            start:'top top',
            // end:'+=3000',
            // markers:true,
            // scrub:0.3,
            pin:true
        }
    })
    intro02.fromTo('.intro02 .txt01 span',{yPercent:100},{yPercent:0})
    .fromTo('.intro02 .txt02 span',{yPercent:100},{yPercent:0})
    .fromTo('.intro02 .txt03 span',{yPercent:100},{yPercent:0})

    // bg = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:".sc_site",
    //         start:'top top',
    //         markers:true,
    //     }

    // })
    // bg.to('body',{'background':'#fff'})

    site = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_site",
            start:'top top',
            end:'+=5000',
            // markers:true,
            scrub:0.2,
            pin:true,
            // snap: {
            //     snapTo: "labels", // 타임라인에서 가장 가까운 레이블에 스냅
            //     // duration: {min: 0.2, max: 1}, // 스냅 애니메이션은 0.2초 이상 3초 이하이어야 합니다(속도에 따라 결정됨).
            //     // delay: 0., // 스냅을 수행하기 전에 마지막 스크롤 이벤트에서 0.2 초를 기다립니다.
            //     // ease: "power1.inOut" // 스냅 애니메이션의 ease (기본적으로 "power3")
            // }
        }
        
    })
    site.addLabel('pj01')
    .to('.group_site',{delay:0.5, xPercent:-25},'pj01')
    .addLabel('pj02')
    .to('.group_site',{xPercent:-50},'pj02')
    .addLabel('pj03')
    // .to('.group_site',{xPercent:-75},'pj03')
    .to('.group_site',{xPercent:-65},'pj03')
    // .addLabel('pj04')
    // .to('.group_site',{xPercent:-400},'pj04')


})
