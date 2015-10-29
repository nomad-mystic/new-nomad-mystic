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

	// Eilixr
	$('.homePageFeaturedOne').mouseover(function() {

		TweenMax.to('.homePageFeaturedOne', 1, {
			x: 50,
			ease: Power1.easeOut,
			zIndex: 10
		});
		TweenMax.to('.homePageFeaturedTwo , .homePageFeaturedThree', 1, {
			padding: '2%',
			opacity: 0.5
		});

	}).mouseleave(function() {
		TweenMax.to('.homePageFeaturedOne', 2, {
			x: 0,
			ease: Power1.easeOut,
			zIndex: 0
		});
		TweenMax.to('.homePageFeaturedTwo , .homePageFeaturedThree ', 1, {
			padding: '0%',
			opacity: 1
		});
		$(this).css('margin-left', 'auto').delay(2000);
	});
	// Space Project
	$('.homePageFeaturedTwo').mouseover(function() {

		TweenMax.to('.homePageFeaturedTwo', 1, {
			y: '-50',
			ease: Power1.easeOut,
			zIndex: 10
		});
		TweenMax.to('.homePageFeaturedOne , .homePageFeaturedThree', 1, {
			padding: '2%',
			opacity: 0.5
		});

	}).mouseleave(function() {
		TweenMax.to('.homePageFeaturedTwo', 2, {
			y: 0,
			ease: Power1.easeOut,
			zIndex: 0
		});
		TweenMax.to('.homePageFeaturedOne , .homePageFeaturedThree ', 1, {
			padding: '0%',
			opacity: 1
		});
		$(this).css('margin-left', 'auto').delay(2000);
	});
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
			homePageFeaturedThree = $('.homePageFeaturedThree'),
			homePageSectionThreeImgs = $('#sectionThree .displayFlex');
			//[homePageFeaturedOne, homePageFeaturedTwo,homePageFeaturedThree]
		// TweenMax.set(homePageSectionThreeImgs, {x: -2000});
		TweenMax.to(homePageFeaturedOne, 2, {
			x: 0,
			ease: Power2.easeInOut
		});
		TweenMax.to(homePageFeaturedTwo, 5, {
			y: 0,
			ease: Power4.easeOut
		});
		TweenMax.to(homePageFeaturedThree, 3, {
			x: 0,
			ease: Power4.easeOut
		});
	}; // End homePageThreeAnimations
	///////////////////////////// afterLoad FullPage animations
	var homePageTwoAnimations = function() {
		var homePageTwoHexTriangle = $('.homePageTwoHexTriangle'),
			homePageTwoTitleBullet = $('.homePageTwoTitleBullet'),
			homePageTwoBulletLines = $('.homePageTwoBulletLines'),
			homePageTwoSmallHeaderHexOne = $('.homePageTwoSmallHeaderHexOne'),
			homePageTwoSmallHeaderHexTwo = $('.homePageTwoSmallHeaderHexTwo'),
			homePageTwoSmallHeaderHexThree = $('.homePageTwoSmallHeaderHexThree'),
			sectionTwoHeaderTwo = $('.sectionTwoAnimations h2');

		// TweenMax.fromTo(homePageTwoHexTriangle, 3, {

		// },{

		// });
		var homePageTwoTL = new TimelineMax();

		homePageTwoTL.add(TweenMax.to(homePageTwoHexTriangle, 1, {
			rotation: 360,
			ease: Power2.easeOut
 		}));

		homePageTwoTL.add(TweenMax.to(homePageTwoTitleBullet, 1, {
			rotation: 180,
			ease: Power2.easeOut
		}));

		homePageTwoTL.add(TweenMax.to(sectionTwoHeaderTwo, 2, {
			x: 0,
			opacity: 1,
			ease: Power2.easeOut
		}));
	}; // End homePageTwoAnimations

	//////////////////////////////////////////////////////////Hidden Menu Area Functions
	var menuButton = $('.menuButton');


	///////////////////////////////////////////////////////// Audio player
	//var playAudio = function() {
	//	var musicPlayerElement = document.createElement('audio');
	//	var song = '_/audio/praiseYou.mp3';
    //
	//	document.body.appendChild(musicPlayerElement);
	//	musicPlayerElement.id = 'musicPlayer';
	//	musicPlayerElement.src = song;
    //
	//	musicPlayerElement.play();
    //
	//	return musicPlayerElement;
	//}; // end play audio

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
        audioVideoControls.slideToggle('slow', function() {

        });
        audioVideoMenuButton.animate({
           width: '5%'
        });
    });

    /// Stop and start the music and video scrollTop


    $(window).on('mousewheel', function() {
        var siteHref = window.location.href;
        if('http://localhost:9001/#page2' === siteHref) {
            audioPlayer[counter].pause();
        } else if('http://localhost:9001/#page1' === siteHref){
            audioPlayer[counter].play();
        }

    });

    // My OG functions not working out with page events
    //var pauseAudio = function(musicPlayerElement) {
	//	// console.log(musicPlayerElement + 'this is inside the function');
    //
	//	// musicPlayerElement.pause();
	//};
	//var locationOfPage = location.hash;

	//if(locationOfPage === '#page1') {
	//	playAudio();
	//	// console.log(musicPlayerElement + 'this is inside the function');
	//}
	//$(window).on('hashchange', function(evnt) {
	//	console.log(evnt);
	//	if(!locationOfPage) {
	//		$('#musicPlayer').trigger('pause');
	//	} else {
	//		$('#musicPlayer').trigger('play');
	//	}
	//});

/// Ful Page Functions for the homePage
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'featuredWorks', 'page4', 'page5'],
		sectionsColor: ['#000', 'orange', '#000', '#ADD8E6', '#222'],
		loopHorizontal: false,
		resize: true,
		// Styles
		css3: true,
		easing: 'easeInOutCubic',
        easingcss3: 'ease',
        fitToSection: true,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        // Navigation
        navigation: true,
        // Functions

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            if(index == 1) {
            	// musicPlayerElement =
            	// playAudio();

           	} // end if
            if(index == 2){
               homePageTwoAnimations();
            } // end if
            if (index == 3) {
            	homePageThreeAnimations();
            } // end if

            // return musicPlayerElement;
        }, // end afterLoad
        onLeave: function(index, nextIndex, direction){
        	 if(index == 1) {

            } // end if
        }
	});
	$.fn.fullpage.setAutoScrolling(true);
	// console.log(musicPlayerElement + " this is outside of the function");

	// tHis is going to be the functions that stop the page from scrolling and stop animations when menu is open
	$('.open-menu').on('click', function() {
		// This is going to stop the page from scolling when menu opened
		$.fn.fullpage.setAllowScrolling(false);
	});
	$('.close-menu').on('click', function() {
		// This is going to allow the page to scolling when menu close
		$.fn.fullpage.setAllowScrolling(true);
	});


    // Menu animation for onclick rotating the span fa fa-rotate-45
    var $menuButton = $('.main-header span');
    $('.hiddenContent').hide();
    $('.main-header span.fa').on('click', function() {
        menuClickEvent();
        $('.hiddenContent').slideToggle('slow');
    });
    var menuClickEvent = function() {
        if($menuButton.hasClass('clicked')) {
            $('.main-header .close-open span.fa').animate({  borderSpacing: 0 }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');

            var siteHref = window.location.href;
            console.log('$menuButton.hasClass(clicked)' + siteHref);

            if('http://localhost:9001/#page1' === !siteHref) {
                audioPlayer[counter].pause();

            } else if('http://localhost:9001/#page1' === siteHref ) {
                audioPlayer[counter].play();
            }
            audioVideoControls.slideToggle('slow');
            $menuButton.removeClass('clicked');
        } else {
            $('.main-header .close-menu span.fa').animate({  borderSpacing: 45 }, {
                step: function(now, fx) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            //$disabilityCategoriesNavContent.stop().slideDown('slow');

            var siteHref = window.location.href;
            console.log('$menuButton.hasClass(unclicked)' + siteHref);
            audioPlayer[counter].pause();
            $menuButton.addClass('clicked');
        }
    }; // end menuClickEvent
}); // End Ready

