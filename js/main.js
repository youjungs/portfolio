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
    site = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_site",
            start:'top top',
            end:'+=5000',
            // markers:true,
            scrub:0.2,
            pin:true,
        }
        
    })
    site.addLabel('pj01')
    .to('.group_site',{delay:0.3, xPercent:-33.3},'pj01')
    .addLabel('pj02')
    .to('.group_site',{xPercent:-66.6},'pj02')


})
