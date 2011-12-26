// CUFON
Cufon.replace('h1, h2, h3, h4, h5, h6, #menu ul li, #headernav, .skill .sName', { fontFamily:'League Gothic', hover:true, textShadow:'0 1px black' });
Cufon.replace('.logo, #introText', { color:'#fff', textShadow:'0 1px black' });
Cufon.replace('caption');

var menuClick = function(id) {
    $('#introText').fadeOut('slow');

    var whichLink = id.split('n');
    var linkName = '.slide-panel:eq(' + (whichLink[1] - 1) + ')';

    if (id == 'logo') {
        $('.slide-panel:eq(0)').hide().removeClass('slideHide').fadeIn(700).siblings().fadeOut(700);
    }
    else {
        $(linkName).hide().removeClass('slideHide').fadeIn(700).siblings().fadeOut(700);
    }

    $('.scrollWrap').tinyscrollbar();

    // INTERACTIONS AND ADD-ONS

    $("a[rel^='prettyPhoto']").prettyPhoto({theme:'dark_square', show_title:false, allow_resize:false});		// PRETTYPHOTO CALLOUT

    $(".pf .overview li a img").hover(function () {                                                            // PORTFOLIO THUMBNAILS HOVER EFFECT
        $('#' + id).animate({opacity:0.5}, 300);
    }, function () {
        $('#' + id).animate({opacity:1}, 300);
    });
};

$(document).ready(function () {

    $('.pfSliderIn img:not(.active)').css({'display':'none'});

    // CSS SETTINGS [WITHOUT THIS CODE CONTENT IS VISIBLE WHEN JS IS DISABLED]

    $('html, body, #full-slider').css({'overflow':'hidden'});
    $('.slide-panel').css({'height':'500px'});
    $('.slide-panel').css({'position':'absolute'});
    $('.slide-panel').css({'left':'' + parseFloat(($(document).width() / 2) - 490) + 'px'});
    $('.slide-panel').css({'height':'440px'});
    $('.scrollWrap').tinyscrollbar();

    window.onresize = resizeWindow;
    function resizeWindow() {
        var newCenter = parseFloat(($(document).width() / 2) - 490) + 'px';
        if ($('#introText').css('display') != 'block') {
            $('.slide-panel').css({
                "left":newCenter
            });
        }
        $('#introText').css({'left':parseFloat(($(document).width() / 2) - ($(this).width() / 2)) + 'px'});
    }

    // BACKGROUND SLIDESHOW [Author: Marco Kuiper (http://www.marcofolio.net/)]

    var slideshowSpeed = 10000;
    var photos = [
        {"image":"bg_boozer_bw.jpg"}, {"image": "bg_natty_bw.jpg"},{"image": "prada2_bw.jpg"}
    ];
    var interval;
    var activeContainer = 1;
    var currentImg = new Date().getTime() % (photos.length);
    var animating = false;
    var navigate = function (direction) {
        if (animating) {
            return;
        }

        var currentContainer = activeContainer;
        if (activeContainer == 1) {
            activeContainer = 2;
        } else {
            activeContainer = 1;
        }

        showImage(photos[currentImg], currentContainer, activeContainer);
    };

    var currentZindex = -1;
    var showImage = function (photoObject, currentContainer, activeContainer) {
        animating = true;
        currentZindex--;
        $("#headerimg" + activeContainer).css({ "background-image":"url(/static/images/" + photoObject.image + ")", "display":"block", "z-index":currentZindex });
        $("#headerimg" + currentContainer).fadeOut(4000, function () {
            setTimeout(function () {
                animating = false;
            }, 8000);
        });
    };

    navigate("next");
//
//    interval = setInterval(function () {
//        navigate("next");
//    }, slideshowSpeed);

    // SUBPAGES NAVIGATION	

    $("#menu ul li a").hover(function () {
        $(this).css({
            'position':'relative',
            'top':0
        }).animate({
                'top':'-5px'
            }, { duration:100 })
    }, function () {
        $(this).animate({
            'top':0
        }, { duration:100 })
    });

    $("#menu ul li a, #menu .logo").click(function () {
        menuClick($(this).attr('id'));
    });

    $('.socialMedia li a, #pfSlider li a').tipTip({edgeOffset:10});											// TIP TIP CALLOUT

    //CLIENTS

    $('ul.clients li a img.lC').css({
        'position':'absolute',
        'top':'0',
        'display':'none'
    });
    $('ul.clients li a img.lG').css({
        'display':'block'
    });

    $('ul.clients li a').tipTip().hover(function () {
        $('.lC', this).fadeIn('150');
    }, function () {
        $('.lC', this).fadeOut('150');
    });

    // PORTFOLIO FILTERING

    $('#pfCategories li').hover(
        function () {
            $(this).animate({opacity:0.75}, 200);
        },
        function () {
            $(this).animate({opacity:1}, 200);
        }).click(function () {
            switch ($(this).attr('class')) {
                case 'all':
                    $('#pfItems li').fadeIn();
                    break;
                case 'webdesign':
                    $('#pfItems li').hide();
                    $('#pfItems li.webdesign').fadeIn();
                    break;
                case 'wordpress':
                    $('#pfItems li').hide();
                    $('#pfItems li.wordpress').fadeIn();
                    break;
                case 'magento':
                    $('#pfItems li').hide();
                    $('#pfItems li.magento').fadeIn();
                    break;
                case 'logo':
                    $('#pfItems li').hide();
                    $('#pfItems li.logo').fadeIn();
                    break;
            }
        });

    // SERVICES INTERACTIONS 

    $('.service a img').hover(function () {
        $(this).animate({opacity:0.5});
    }, function () {
        $(this).animate({opacity:1});
    });

    // LIST INTERACTIONS 

    $('ul.dotlist li, ul.cList li').hover(function () {
        $(this).animate({backgroundPosition:'3px 8px'}, 100);
    }, function () {
        $(this).animate({backgroundPosition:'0px 8px'}, 100);
    });

});

