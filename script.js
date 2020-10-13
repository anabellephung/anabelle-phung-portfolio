$(function() {
  const $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active")
    $('.menuList').slideToggle();
  });
})

