$(function() {
  // Highlight nav link when user is in section;
  $(window).scroll(function () {
    var position = window.pageYOffset;
    $('section').each(function () {
      var target = $(this).offset().top-300;
      var id = $(this).attr('id');
      var navLinks = $('.link');
      if (position >= target) {
        navLinks.removeClass('active');
        $('.link[href="#' + id + '"]').addClass('active');
      }
    });
  });
  // Word change animation - homepage
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
  // const $hamburger = $('.hamburger');
  // $hamburger.on('click', function() {
  //   $hamburger.toggleClass('is-active')
  //   $('#menuList').toggleClass('menuToggle');
  // });
  // Media query for hamburger mobile menu
  // $(window).on('resize', function () {
  //   if (window.innerWidth > 460) {
  //     $('#menuList').removeClass('menuToggle');
  //     $hamburger.removeClass('is-active')
  //   }
  // })
  // Formspree contact form - prevent default refresh
  $('#emailForm').on('submit', function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const message = $('#message').val();
    // Send to formspree, prevent redirect to default 'thank you page'
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
  // Project Gallery Modal
  let modal = document.querySelector('.modal');
  let modalImg = document.querySelector('.modalImg');
  let caption = document.getElementById('caption');
  Array.from(document.querySelectorAll('.imgThumbnail')).forEach(item => {
    item.addEventListener('click', event => {
      modal.style.display = 'flex';
      modalImg.src = event.target.src;
      caption.innerHTML = event.target.alt;
    });
  });
  document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
})
