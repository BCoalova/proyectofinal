

// Inline SVG insertado con AJAX
/*
const xhr = new XMLHttpRequest();
const catSpace = document.getElementById('catSpace');

xhr.onload = function() {

    if (this.status === 200) {
        catSpace.innerHTML = xhr.responseText;
    } else {
        console.warn('Did not recive 200 ok from the response!');
    }

};

xhr.open('get', '../img/cat-in-space.svg');
xhr.send();

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
            //y: "-=5px",
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
            repeat:-1,
            transformOrigin:"50% 50%"
          });
        TweenMax.to('#saturno-luna_2_', 100, {
            rotation:"+=360",
        },0);
        

    };
    
    
});

