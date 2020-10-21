$(function() {
  let words = [
    'developer',
    'designer',
    'collaborator',
    'female'
  ],
    i = 0;

  setInterval(function () {     
    $('#change').fadeOut(400, function () {
      $(this).text(words[(i === words.length - 1) ? i = 0 : i += 1]).fadeIn(400);
    });
  }, 2000);

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
