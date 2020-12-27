"use strict";

$(function () {
  var animtext = [' an atmosphere', ' a place to live', ' PoliCoffee'],
      i = 0; // On gère l'affichage du menu reponsif ppur les écrans inférieurs ou égaux à medium (< 992px)
  // $(".navbar-responsive").toggle();
  // $(".menu").click(function () {
  //   $(".navbar-responsive").toggle("slow");
  // });
  // On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)

  setInterval(function () {
    $("#animtext").fadeOut(function () {
      $(this).html(animtext[i = (i + 1) % animtext.length]).fadeIn();
    });
  }, 2500);
});