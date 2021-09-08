// $( document ).ready(function() {
//    alert('hello');
// });

//document.getElementById('myVideo').play();


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

   //>=, not <=
  if (scroll >= 500) {
      //clearHeader, not clearheader - caps H
      $("#sticky").addClass("stick");
  }else{
      $("#sticky").removeClass("stick");
  }


  $('.page-section').each(function(i) {
    if ($(this).position().top <= scroll) {
        $('#sticky ul li a.active').removeClass('active dddd');
        $('#sticky ul li a').eq(i).addClass('active www');
    }
});

});

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});


        //setPageURL(window.location.href);
       // var ResponseURL = (window.location.href)
       // var domain = ResponseURL.split('/');
        //alert(domain[domain.length - 1]);
        //var currentcomp = (domain[domain.length - 1])
        // if(currentcomp === 'documentation'){
        //     $('.footer-wrapper').addClass('hidefooter')
        // }
        
        //if(currentcomp === 'contact'){
           // alert('yes')
           // $('.navigation-wrapper').addClass('footermenu')
           // $('.footer-wrapper').addClass('hidefooter')
       // }else{
           // alert('no')
       // }
});










// $(document).ready(function(){

// $('#overlay').on('click', function(){
//     $('.dropdown-menu, #overlay').toggleClass('show')
//   })
// });







// $(function () {
//   function sticky_relocate() {
//     var window_top = $(window).scrollTop();
//     var div_top = $('#sticky-anchor').offset().top;
//     if (window_top > div_top) {
//       $('#sticky').addClass('stick');
//     } else {
//       $('#sticky').removeClass('stick');
//     }
//   }
  
//   $(function() {
//     $(window).scroll(sticky_relocate);
//     sticky_relocate();
//   });
// });


// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
//     sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});

	//methods
	//$.fn.fullpage.setAllowScrolling(false);
//});

$(document).ready(function() {
$('.innews-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
})

// $(document).ready(function() {
// 	var owl = $('.innews-carousel');
// 	owl.owlCarousel({
// 	  items: 4,
// 	  loop: true,
// 	  margin: 30,
// 	  autoplay: false,
// 	  autoplayTimeout: 1000,
// 	  autoplayHoverPause: true,
// 	  responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// 	});
// })



// const $slider = $("#slider");
// $slider
// 	.on('init', () => {
// 		mouseWheel($slider)
// 	})
// 	.slick({
// 		dots: true,
// 		vertical: true,
// 		infinite: false,
// 	})
// function mouseWheel($slider) {
// 	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
// }
// function mouseWheelHandler(event) {
// 	event.preventDefault()
// 	const $slider = event.data.$slider
// 	const delta = event.originalEvent.deltaY
// 	if(delta > 0) {
// 		$slider.slick('slickPrev')
// 	}
// 	else {
// 		$slider.slick('slickNext')
// 	}
// }





var autoPlayVideo = document.getElementById("ocScreencapVideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
}

// $(".navbar-nav .nav-item").on("click", function() {
//   $(".nav-item").removeClass("active");
//   $(this).addClass("active");
// });








