function FixedAnime() {
  var headerH = $("#header").outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    $("#header").addClass("fixed");
    $(".header_upper").hide();
  } else {
    $("#header").removeClass("fixed");
    $(".header_upper").show();
  }
}

$(window).scroll(function () {
  FixedAnime();
});

$(window).on("load", function () {
  FixedAnime();
  $(".slick").slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "20%",
  });
});
