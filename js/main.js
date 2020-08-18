/* 
AGREGANDO CLASE fadeIn 
CUANDO EL ELEMENTO DE CLASE itsAlive ESTA EN EL VIEWPORT 
*/
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

/* 
CERRANDO LA VENTANA MODAL 
CUANDO SE CLIQUEA UN LINK 
QUE NO RECARGA LA PÁGINA 
*/
$(function() {
    $('.closemodal').click(function() {
        $('#modalNavbar').modal('hide');
    });
});



/* 
CAT ANIMATION 
*/

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
/* 
OPCIONES DE particleJs 
(ESTRELLAS EN MOVIMIENTO) 
*/
particlesJS (
    "particles-js", {
        "particles":{
            "number":{
                "value":130,
                "density":{
                    "enable":true,
                    "value_area":1025
                }
            },
            "color":{
                "value":"#ffffff"
            },
            "shape":{
                "type":"circle","stroke":{
                    "width":0,
                    "color":"#000000"
                },
                "polygon":{
                    "nb_sides":5
                },
                "image":{
                    "src":"img/github.svg",
                    "width":100,"height":100
                }
            },
            "opacity":{
                "value":1,
                "random":true,
                "anim":{
                    "enable":true,
                    "speed":1,
                    "opacity_min":0,
                    "sync":false
                }
            },
            "size":{
                "value":4,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":4,
                    "size_min":0.3,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
            },
            "move":{
                "enable":true,
                "speed":.3,
                "direction":"none",
                "random":true,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{
                    "enable":true,
                    "rotateX":1815,
                    "rotateY":600
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":true,
                    "mode":"bubble"
                },
                "onclick":{
                    "enable":true,
                    "mode":"repulse"
                },"resize":true
            },
            "modes":{
                "grab":{
                    "enable":false,
                    "line_linked":{
                        "opacity":1
                    }
                },
                "bubble":{
                    "distance":275,
                    "size":5,
                    "duration":2,
                    "opacity":0.8,
                    "speed":3
                },
                "repulse":{
                    "enable":false,
                },
                "push":{
                    "particles_nb":4
                },
                "remove":{
                    "particles_nb":2
                }
            }
        },
        "retina_detect":true
    });