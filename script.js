$(function() {
  // var newHash = "",
  //   $mainContent = $("#main-content"),
  //   $pageWrap = $("#page-wrap"),
  //   baseHeight = 0,
  //   $el;

  // $pageWrap.height($pageWrap.height());
  // baseHeight = $pageWrap.height() - $mainContent.height();

  // $("nav").delegate("a", "click", function () {
  //   window.location.hash = $(this).attr("href");
  //   return false;
  // });

  // $(window).bind('hashchange', function () {

  //   newHash = window.location.hash.substring(1);

  //   if (newHash) {
  //     $mainContent
  //       .find("#guts")
  //       .fadeOut(200, function () {
  //         $mainContent.hide().load(newHash + " #guts", function () {
  //           $mainContent.fadeIn(200, function () {
  //             $pageWrap.animate({
  //               height: baseHeight + $mainContent.height() + "px"
  //             });
  //           });
  //           $("nav a").removeClass("current");
  //           $("nav a[href='" + newHash + "']").addClass("current");
  //         });
  //       });
  //   };

  // });

  // $(window).trigger('hashchange');



  
  // Toggle hamburger mobile menu
  const $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active")
    $("#menuList").toggleClass("menuToggle");
  });
  // Media query for hamburger mobile menu
  $(window).on('resize', function () {
    if (window.innerWidth > 460) {
      $("#menuList").removeClass("menuToggle");
      $hamburger.removeClass("is-active")
    }
  })
  $('#emailForm').on('submit', function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const message = $('#message').val();
    // Send to formspree
    $.ajax({
      url: 'https://formspree.io/f/xpzopbzk',
      method: 'POST',
      data: {
        _replyto: email,
        email: email,
        message: message,
        _subject: 'Form Submission',
      },
      dataType: "json",
      success: function () {
        swal("Thank you for the message!", "I will get back to you ASAP 😸.");
      }
    });
  });

  var modalEle = document.querySelector(".modal");
  var modalImage = document.querySelector(".modalImage");
  var captionText = document.getElementById("caption");
  Array.from(document.querySelectorAll(".imgThumbnail")).forEach(item => {
    item.addEventListener("click", event => {
      modalEle.style.display = "flex";
      modalImage.src = event.target.src;
      captionText.innerHTML = event.target.alt;
      
    });
  });
  document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
  });
})
