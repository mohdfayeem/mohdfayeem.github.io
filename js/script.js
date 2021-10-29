/* 
    Theme: Mohd Fayeem Portfolio
    Author: Mohd Fayeem
*/

$(function () {
  AOS.init();
  // Make Navigation Fixed Top On Scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  // Collapse Navbar on Scroll
  $(window).on("scroll", function () {
    $(".navbar .navbar-collapse").collapse("hide");
  });
  // Collapse Navbar on nav-link click
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //smoothscroll
  $('a.nav-link[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a.nav-link").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  // Work Carousel
  $("#workCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      520: {
        items: 2,
      },
      720: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
    },
  });

  // Testimonials Carousel
  $("#testimonialsCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      720: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".navbar a.nav-scroll").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".navbar a.nav-scroll").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
