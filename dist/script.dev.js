"use strict";

// fonction qui permet de changer la grosse l'image en fonction des petites images

/* <div class="imgBox">
               <img src="image/img1.png" class="starbucks" alt="">
           </div>
       </div>
       <ul class="thumb">
           <li><img src="image/thumb1.png" onclick="imgSlider('image/img1.png');changeCircleColor('#017143')" alt=""></li>
           <li><img src="image/thumb2.png" onclick="imgSlider('image/img2.png');changeCircleColor('#eb7495')" alt=""></li>
           <li><img src="image/thumb3.png" onclick="imgSlider('image/img3.png');changeCircleColor('#d752b1')" alt=""></li>
       </ul>*/
function imgSlider(anything) {
  document.querySelector('.starbucks').src = anything;
} /////////////////////////////////////////////////
//on change la couleur de la class circle

/*<div class="circle"></div>*/

/*<li><img src="image/thumb1.png" onclick="imgSlider('image/img1.png');changeCircleColor('#017143')" alt=""></li>
           <li><img src="image/thumb2.png" onclick="imgSlider('image/img2.png');changeCircleColor('#eb7495')" alt=""></li>
           <li><img src="image/thumb3.png" onclick="imgSlider('image/img3.png');changeCircleColor('#d752b1')" alt=""></li>*/


function changeCircleColor(colors) {
  var circles = document.querySelector('.circle');
  circles.style.background = colors;
} //////////////////////////////////
// menu mobile


function toggleMenu() {
  // on slect la class toggle
  var menuToggle = document.querySelector('.toggle'); // on slect la class navMobile

  var navMobile = document.querySelector('.navMobile'); //quand les classes sont active il se passe quelque chose en css

  menuToggle.classList.toggle('active');
  navMobile.classList.toggle('active');
}