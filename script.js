$(function() {
  const $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active")
    $("#menuList").toggleClass("menuToggle");
  });

  $(window).on('resize', function() {
    if (window.innerWidth > 460) {
      $("#menuList").removeClass("menuToggle");
      $hamburger.removeClass("is-active")
    }
  })
})