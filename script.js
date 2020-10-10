$(function() {
  const $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    if ($hamburger.toggleClass("is-active")) {
      $('ul').slideToggle(e)
    } else {
      $('ul').hide(e)
    }
  });
})