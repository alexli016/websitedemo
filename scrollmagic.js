// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

window.onload = (function($) {

if( document.querySelector('body').classList.contains('home') ){

  var element = $('#pushVideoElement');
  var win = $(window);
  var video = document.querySelector('video#v0');

  win.on('scroll', function () {
      if(percentageSeen() > 0) {
        video.style.bottom = percentageSeen() + '%';
      }
      else{
        if(video.style.bottom != 0){
          video.style.bottom = 0;
        }
      }
  });

  win.on('resize', function () {
    if(percentageSeen() > 0) {
      video.style.bottom = percentageSeen() + '%';
    }
    else{
      if(video.style.bottom != 0){
        video.style.bottom = 0;
      }
    }
});
  
  function percentageSeen () {
      var viewportHeight = $(window).height(),
          scrollTop = win.scrollTop(),
          elementOffsetTop = element.offset().top,
          elementHeight = element.height();
      if (elementOffsetTop > (scrollTop + viewportHeight)) {
          return 0;
      } else if ((elementOffsetTop + elementHeight) < scrollTop) {
          return 100;
      } else {
          var distance = (scrollTop + viewportHeight) - elementOffsetTop;
          var percentage = distance / ((viewportHeight + elementHeight) / 100);
          percentage = Math.round(percentage);
          return percentage;
      }
  }
  win.trigger('scroll');

  var fadeInScene =new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1", // point of execution
    duration: 4000, // pin element for the window height - 1
    triggerHook: 0,
    offset: 0,
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setTween(TweenMax.from(".elementor-section-wrap", 1,{background:'rgba(0,0,0,0.8)'}))
  .setTween(TweenMax.to(".elementor-section-wrap", 1,{background:'rgba(0,0,0,0)'}))

  // Scene2 Handler
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger2", // point of execution
    triggerHook: 0.3,
    duration: 1000 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger2") // the element we want to pin

  // Scene3 Handler
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger3", // point of execution
    triggerHook: 0.4,
    duration: 1000 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger3") // the element we want to pin

  // Scene4 Handler
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger4", // point of execution
    triggerHook: 0.75,
    duration: 1000 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger4") // the element we want to pin

  // Scene5 Handler
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger5", // point of execution
    triggerHook: 0.75,
    duration: 2500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger5") // the element we want to pin

  // Scene6 Handler
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger6", // point of execution
    triggerHook: 0.75,
    duration: 500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger6") // the element we want to pin

  // Scene6_2 Handler
  var scene6_2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger6_2", // point of execution
    triggerHook: 0.75,
    duration: 500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger6_2") // the element we want to pin


  // Scene7 Handler
  var scene7 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger7", // point of execution
    triggerHook: 0.75,
    duration: 500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger7") // the element we want to pin

  // Scene9 Handler
  var scene9 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger9", // point of execution
    triggerHook: 0.5,
    duration: 3500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger9") // the element we want to pin

  // Scene10 Handler
  var scene10 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger10", // point of execution
    triggerHook: 0.5,
    duration: 1500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger10") // the element we want to pin

  // Scene11 Handler
  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger11", // point of execution
    triggerHook: 0.35,
    duration: 3500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger11") // the element we want to pin

  // Scene12 Handler
  var scene12 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger12", // point of execution
    triggerHook: 0.35,
    duration: 1500 // pin the element for a total of 400px
  })
  .setPin("#pinned-trigger12") // the element we want to pin

  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    fadeInScene,
    scene1,
    scene2,
    scene3,
    scene4,
    scene5,
    scene6,
    scene6_2,
    scene7,
    scene9,
    scene10,
    scene11,
    scene12,
  ]);

  // select video element
  var vid = document.getElementById('v0');
  var windowheight = $(window).height()-20;
  var scrollpos = window.pageYOffset/400;
  var targetscrollpos = scrollpos;
  var lastScrollPos = 0;

  // ---- Values you can tweak: ----
  var accelamount = 0.25; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.

  var playPromise = vid.play();
 
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // We can now safely pause video...
      vid.pause();
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }

  window.onscroll = function(){
      //Set the video position that we want to end up at:
       targetscrollpos = window.pageYOffset/jQuery(document).height() * 40.75;
      //targetscrollpos = window.pageYOffset / 650;
  };

  setInterval(function(){  
    //Accelerate towards the target:
    scrollpos += Math.round(((targetscrollpos - scrollpos)*accelamount)*1000)/1000;

    //update video playback
    // if(scrollpos - lastScrollPos > 0.01 || lastScrollPos - scrollpos > 0.01){
     if(scrollpos != lastScrollPos){
      vid.currentTime = scrollpos;
      vid.pause();
    }
    lastScrollPos = scrollpos;
  },40);
}

else if( document.querySelector('body').classList.contains('product') ){
  var windowWidth = $(window).width();
  var triggerHook;
  var scene1;
  var pinDuration = $( 'div.content-col' ).height() - 500;
  if(document.querySelector('body').classList.contains('about')){
    triggerHook = 0.4;
  }
  else{
    triggerHook = 0.5;
  }
  if(windowWidth >= 768){
    hasScene = true;
    scene1 =new ScrollMagic.Scene({
      triggerElement: "#pinned-trigger1", // point of execution
      duration: pinDuration, // pin element for the window height - 1
      triggerHook: triggerHook,
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#pinned-trigger1"); // the element we want to pin
    controller.addScene([
      scene1,
    ]);
  }
  else{
    hasScene = false;
    scene1 =new ScrollMagic.Scene({
      triggerElement: "#pinned-trigger1", // point of execution
      duration: pinDuration, // pin element for the window height - 1
      triggerHook: triggerHook,
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
  }

  var win = $(window);

  win.on('resize', function () {

    var pinDuration = $( 'div.content-col' ).height() - 500;
    scene1.duration(pinDuration);
    // var pinDuration = $( 'div.content-col' ).height() - 500;
    // newScene = new ScrollMagic.Scene({
    //   triggerElement: "#pinned-trigger1", // point of execution
    //   duration: pinDuration, // pin element for the window height - 1
    //   triggerHook: triggerHook,
    //   reverse: true // allows the effect to trigger when scrolled in the reverse direction
    // })
    // .setPin("#pinned-trigger1"); // the element we want to pin
    // controller.addScene([
    //   newScene,
    // ]);
  });
}
})(jQuery)