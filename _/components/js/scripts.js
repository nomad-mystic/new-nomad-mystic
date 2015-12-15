/*
	Promgrammer = Keith Murphy 
	File = scripts.js
	date Created = 3-10-2015
	Last Mod = 3-10-2015
*/
$(document).ready(function() {

    // This is going to test pushing to github master 10_16_2015
	///////////////////////////////////////// SectionThree
	/// Hover events
	// THis is Hex desgin project
	$('.homePageFeaturedThree').mouseover(function() {

		TweenMax.to('.homePageFeaturedThree', 1, {
			x: '-50',
			ease: Power1.easeOut,
			zIndex: 10
		});
		TweenMax.to('.homePageFeaturedOne , .homePageFeaturedTwo', 1, {
			padding: '2%',
			opacity: 0.5
		});

	}).mouseleave(function() {
		TweenMax.to('.homePageFeaturedThree', 2, {
			x: 0,
			ease: Power1.easeOut,
			zIndex: 0
		});
		TweenMax.to('.homePageFeaturedOne , .homePageFeaturedTwo', 1, {
			padding: '0%',
			opacity: 1
		});
		$(this).css('margin-left', 'auto').delay(2000);
	});
	// THis is th eline animations
		// TweenMax.to(homePageTwoLineOne, 2, {strokeMiterlimit: 10})

	var homePageThreeAnimations = function() {
		var homePageFeaturedOne = $('.homePageFeaturedOne'),
			homePageFeaturedTwo = $('.homePageFeaturedTwo'),
			homePageFeaturedThree = $('.homePageFeaturedThree');

		TweenMax.to(homePageFeaturedOne, 2, {

		});
		TweenMax.to(homePageFeaturedTwo, 5, {

		});
		TweenMax.to(homePageFeaturedThree, 3, {

		});
	}; // End homePageThreeAnimations
	///////////////////////////// afterLoad FullPage animations
	//var homePageTwoAnimations = function() {
	//	var homePageTwoHexTriangle = $('.homePageTwoHexTriangle'),
	//		homePageTwoTitleBullet = $('.homePageTwoTitleBullet'),
	//		homePageTwoBulletLines = $('.homePageTwoBulletLines'),
	//		homePageTwoSmallHeaderHexOne = $('.homePageTwoSmallHeaderHexOne'),
	//		homePageTwoSmallHeaderHexTwo = $('.homePageTwoSmallHeaderHexTwo'),
	//		homePageTwoSmallHeaderHexThree = $('.homePageTwoSmallHeaderHexThree'),
	//		sectionTwoHeaderTwo = $('.sectionTwoAnimations h2');
    //
	//	// TweenMax.fromTo(homePageTwoHexTriangle, 3, {
    //
	//	// },{
    //
	//	// });
     //       var homePageTwoTL = new TimelineMax();
    //
     //   homePageTwoTL.add(TweenMax.to(homePageTwoHexTriangle, 1, {
     //       rotation: 360,
     //       ease: Power2.easeOut
     //   }));
    //
     //   homePageTwoTL.add(TweenMax.to(homePageTwoTitleBullet, 1, {
     //       rotation: 180,
     //       ease: Power2.easeOut
     //   }));
    //
     //   homePageTwoTL.add(TweenMax.to(sectionTwoHeaderTwo, 2, {
     //       x: 0,
     //       opacity: 1,
	//		ease: Power2.easeOut
	//	}));
	//}; // End homePageTwoAnimations

	//////////////////////////////////////////////////////////Hidden Menu Area Functions



	///////////////////////////////////////////////////////// Audio player
    var audioPlayer = $('.audioPlayer');
    var counter = 0;

    $('.playButton').click(function(){
        audioPlayer[counter].play();

    });
    $('.pauseButton').click(function(){
        audioPlayer[counter].pause();

    });
    $('.stopButton').click(function(){
        audioPlayer[counter].pause();
        audioPlayer[counter].currentTime = 0;

    });
    audioPlayer.bind('timeupdate', function(){
        //Gets the whole duration of the track.
        var track_length =  audioPlayer[counter].duration;
        var secs =  audioPlayer[counter].currentTime;
        var progress = (secs/track_length) * 100;

        $('.audioVideoBar').css({'width' : progress + '%'});

    });
    /// for the audio video menu animation to leave page
    var audioVideoMenuButton = $('.audioVideoMenuButton'),
        audioVideoControls = $('.audioVideoControls');

    audioVideoControls.hide();
    audioVideoMenuButton.on('click', function() {
        audioVideoControls.slideToggle('slow', function(){});
    }); // End audioVideoMenuButton

    /// Stop and start the music and video scrollTop
    $(window).on('scroll', function() {
        var siteHref = window.location.href;
        if('http://localhost:9001/#page2' === siteHref) {
            audioPlayer[counter].pause();

        } else if('http://localhost:9001/#page1' === siteHref){
            audioPlayer[counter].play();
        }
    });
/// Ful Page Functions for the homePage
    // Changes the landing url to #page1

	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'featuredWorks', 'page4', 'page5'],
		sectionsColor: ['#000', 'orange', '#555555', 'orange', '#222'],
		loopHorizontal: false,
		resize: true,
		// Styles
		css3: true,
		easing: 'easeInOutCubic',
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        // Navigation
        navigation: true ,
        // Functions
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
			//using index
            if(index == 1) {
                //$.fn.fullpage.setAutoScrolling(true);

            } // end if
            if(index == 2){
               //homePageTwoAnimations();
            } // end if
            if (index == 3) {
            	homePageThreeAnimations();
            } // end if

        }, //, // end afterLoad
        onLeave: function(index, nextIndex, direction){

            //if(index == 1 && direction == 'down') {
            //     $.fn.fullpage.setAutoScrolling(false);
            //} else if(direction == 'up' && nextIndex == 1) {
            //    $.fn.fullpage.setAutoScrolling(true);
            //}
        }
	});
    $.fn.fullpage.setAutoScrolling(false);
	$.fn.fullpage.setFitToSection(false);


    var $closeMenuButton = $('.close-menu');
    var $openMenuButton = $('.open-menu');
    var $menuButton = $('.main-header span.fa');
	// tHis is going to be the functions that stop the page from scrolling and stop animations when menu is open
    $openMenuButton.on('click', function() {
		// This is going to stop the page from scolling when menu opened
		$.fn.fullpage.setAllowScrolling(false);
	});
    $closeMenuButton.on('click', function() {
		// This is going to allow the page to scolling when menu close
		$.fn.fullpage.setAllowScrolling(true);
	});


    // Menu animation for onclick rotating the span fa fa-rotate-45


    $('.hiddenContent').hide();
    $menuButton.on('click', function() {
        menuClickEvent();
        $('.hiddenContent').slideToggle('slow');
    });

    var menuClickEvent = function() {
        if ($openMenuButton.hasClass('clicked')) {

            $closeMenuButton.fadeOut('fast');
            $openMenuButton.fadeIn('fast');
            $openMenuButton.removeClass('clicked');
            $('.close-menu').animate({  borderSpacing: 0 }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration: 1000
            },'linear');

            audioPlayer[counter].pause();

        } else {
            $openMenuButton.fadeOut('fast');
            $closeMenuButton.removeClass('.close-menu');
            $openMenuButton.addClass('clicked');
            $closeMenuButton.fadeIn('fast').animate({  borderSpacing: 45 }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration: 200
            },'linear');

            audioPlayer[counter].pause();
            if (audioVideoControls.css({'display': 'none'})){
                audioVideoControls.slideToggle('slow');
            }
        }
    }; // end menuClickEvent

    /// homePageSectionTwo
    //THis is from css-trick for scaling divs and their content in side
    //var $sectionTwo = $('#sectionTwo'); // this is the wrapper
    //var $sectionTwoAnimations = $('.sectionTwoAnimations'); /// content inside
    //var $sectionHeight = $sectionTwoAnimations.outerHeight();
    //var $sectionWidth = $sectionTwoAnimations.outerWidth();
    //
    //$sectionTwo.resizable({
    //    resize: resize
    //});
    //
    //function resize(event, ui) {
    //    var $scale, $origin;
    //
    //    $scale = Math.min(
    //        ui.size.width / $sectionWidth,
    //        ui.size.height / $sectionHeight
    //    );
    //
    //    $sectionTwoAnimations.css({
    //       transform: 'scale(' + $scale + ')'
    //    });
    //} // End resize
    //
    //var startingPoint = {
    //  size: {
    //      width: $sectionTwo.width(),
    //      height: $sectionTwo.height()
    //  }
    //};
    //
    //resize(null, startingPoint);


    ///Feature Works Section
    // This adds hover effect to the overlay div to manipulate the opacity of the overlay
    var $homeFeaturedOne = $('.homeFeaturedOne');
    var $homeFeaturedTwo = $('.homeFeaturedTwo');
    var $homeFeaturedThree = $('.homeFeaturedThree');

    $homeFeaturedOne.hover(overlayHoverOn, overlayHoverOff);
    $homeFeaturedTwo.hover(overlayHoverOn, overlayHoverOff);
    $homeFeaturedThree.hover(overlayHoverOn, overlayHoverOff);

    function overlayHoverOn(ev) {
        var target = $(ev.target);
        target.animate({
            opacity: 1
        }, 200);
    }
    function overlayHoverOff(ev) {
        var target = $(ev.target);
        target.animate({
            opacity: 0
        }, 200);
    }
}); // End Ready

