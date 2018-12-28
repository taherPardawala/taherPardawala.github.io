// $(window).scroll(function() {
//     if ($(this).scrollTop() == 2900) {
//     //    console.log("Trigger");
//         TweenMax.from('.img-tab-1', 1, {scale: 0, opacity: 0});
//     }
// });

$( document ).ready(function() {
    var controller = new ScrollMagic.Controller();
    
    // Animation Team
    new ScrollMagic.Scene({
        triggerElement: '.team-section',
        // duration: '80%',
        offset: 280,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.team-members', 0.5, {y: 200, opacity: 0, ease: Power1.easeOut}, 0.3))
    .addIndicators()
    .addTo(controller);

    // Animation Portfolio List

    /* new ScrollMagic.Scene({
        triggerElement: '#portfolio',
        // duration: '80%',
        offset: 0,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.list-filters', 0.7, {y: 50, opacity: 0, ease: Power2.easeOut}, 0.4))
    .addIndicators()
    .addTo(controller);

    // Animation Services Illustration
    new ScrollMagic.Scene({
        triggerElement: '#services',
        // duration: '80%',
        offset: 150,
        reverse: false
    })
    .setTween(TweenMax.from('.img-tab-1', 1, {scale: 0, opacity: 0}))
    .addIndicators()
    .addTo(controller); */
    
    // Animation Title 1

    new ScrollMagic.Scene({
        triggerElement: '.carousel-inner',
        // duration: '80%',
        offset: 500,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-samatva', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);

    // Animation Title 2

    new ScrollMagic.Scene({
        triggerElement: '#approach',
        // duration: '80%',
        offset: -70,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-approach', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);

    // Animation Title 3

    new ScrollMagic.Scene({
        triggerElement: '#collaborations',
        // duration: '80%',
        offset: -100,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-bringing', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);

    // Animation Title 4

    new ScrollMagic.Scene({
        triggerElement: '#design-jam',
        // duration: '80%',
        offset: -100,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-jamming', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);

     // Animation Title 5

     new ScrollMagic.Scene({
        triggerElement: '#story-street',
        // duration: '80%',
        offset: -100,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-street', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);

     // Animation Title 6

     new ScrollMagic.Scene({
        triggerElement: '#team',
        // duration: '80%',
        offset: -100,
        reverse: false
    })
    .setTween(TweenMax.staggerFrom('.title-team', 0.35, {scale: 0, opacity: 0}, 0.16))
    .addIndicators()
    .addTo(controller);
    
    
    
    
    // TweenMax.staggerFrom('.team-members', 0.5, {y: 200, opacity: 0, ease: Power1.easeOut}, 0.3);
    // TweenMax.staggerFrom('.list-filters', 0.7, {y: 50, opacity: 0, ease: Power2.easeOut}, 0.4);
});