$('.menu-toggle, a').click(function() {
    $('nav').toggleClass('active')
  })

$('navbarNav ul li a').click(() => {
     $('nav').removeClass('active')
});