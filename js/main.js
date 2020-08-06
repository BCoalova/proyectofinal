(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {
    
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function(event) {
    
    $(".itsAlive").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
        el.addClass("fadeIn"); 
    } else {
        el.removeClass("fadeIn");
    }
    });
    
});


/* CAT ANIMATION */

 $(function(){
  var svgContainer = $("#catSpace");
    var svgUrl    = "img/cat-in-space.svg";

    $.get(svgUrl)
    .then(injectSvg)
    .always(startAnimation)

    function injectSvg(xmlDoc) {
        var svg = $(xmlDoc).find("svg");
        svgContainer.append(svg);
    }
    function startAnimation() {    
        // GATO ANIMATIONS 
        TweenMax.to('#gato', 3, {
            delay: 0,
            y: "-=15px",
            rotation: -1,
            yoyo:true,
            repeat:-1,
            ease: Power2.easeInOut,
        });
        TweenMax.to('#gato', 2, {
            delay: 0,
            x: "-=5px",
            yoyo:true,
            repeat:-1,
            ease: Power2.easeInOut,
        },0);
        // SOGA ANIMATION 
        TweenMax.to('#soga', 3, {
            delay: 0,
            scaleY: 0.96,
            yoyo:true,
            repeat:-1,
            ease: Power2.easeInOut,
        },0);
        // NAVE
        TweenMax.to('#nave', 3, {
            delay: 0,
            x: "-=2px",
            rotation: -1,
            yoyo:true,
            repeat:-1,
            ease: Power2.easeInOut,
        },0);
        TweenMax.to('#nave', 2, {
            delay: 0,
            y: "-=3px",
            yoyo:true,
            repeat:-1,
            ease: Power2.easeInOut,
        },.3);

         // TIERRA ANIMATION 
        TweenMax.set("#tierra", {
            rotation:0.01,
            z:0.01,
            transformOrigin:"50% 50%"
        },0);
        TweenMax.to('#tierra', 270, {
            rotation:"+=360",
        },0);
        TweenMax.to('#tierra', 5, {
            y: "-=5px",
            x: "-=10px",
        },0);
        // VENUS ANIMATION 
        TweenMax.set("#venus", {
            rotation:0.01,
            z:0.01,
            transformOrigin:"50% 50%"
        });
        TweenMax.to('#venus', 50, {
            rotation:"+=360"
        },0);
        TweenMax.to('#venus', 5, {
            y: "-=2px",
            x: "-=8px",
        },0);
        // LUNA DE SATURNO 
        TweenMax.set("#saturno-luna_2_", {
            rotation:0.01,
            z:0.01,
            repeat:1,
            transformOrigin:"50% 50%"
        });
        TweenMax.to('#saturno-luna_2_', 100, {
            rotation:"+=360",
            repeat:1,
        },0);
        

    };
    
    
}); 

