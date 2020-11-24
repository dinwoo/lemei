(function($) {
  var carouselIndex01 = 0;
  var carouselLength01 = $(
    "article section.main .part_03 .wrapper .carousel .box .pics"
  ).length;
  var carouselIndex02 = 0;
  var carouselLength02 = $(
    "article section.main .part_03 .wrapper .carousel .box_m .pic"
  ).length;

  var carouselIndex03 = 0;
  var carouselLength03 = $(
    "article section.main .part_04 .wrapper .box figure.pic"
  ).length;

  var carouselIndex04 = 0;
  var carouselLength04 = $(
    "article section.main .part_05 .wrapper .box figure.pic"
  ).length;

  var carouselIndex05 = 0;
  var carouselLength05 = $("article section.main .part_07 .wrapper .box .pics")
    .length;

  var carouselIndex06 = 0;
  var carouselLength06 = $("article section.main .part_07 .wrapper .box_m .pic")
    .length;

  var carouselIndex07 = 0;
  var carouselLength07 = $("article section.main .part_09 .wrapper .box .pics")
    .length;

  var carouselIndex08 = 0;
  var carouselLength08 = $("article section.main .part_09 .wrapper .box_m .pic")
    .length;

  function doCarousel01(temp) {
    $(
      "article section.main .part_03 .wrapper .carousel .box .pics:nth-child(" +
        (carouselIndex01 + 1) +
        ")"
    ).fadeOut();
    carouselIndex01 =
      (carouselIndex01 + temp + carouselLength01) % carouselLength01;
    $(
      "article section.main .part_03 .wrapper .carousel .box .pics:nth-child(" +
        (carouselIndex01 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel02(temp) {
    $(
      "article section.main .part_03 .wrapper .carousel .box_m .pic:nth-child(" +
        (carouselIndex02 + 1) +
        ")"
    ).fadeOut();
    carouselIndex02 =
      (carouselIndex02 + temp + carouselLength02) % carouselLength02;
    $(
      "article section.main .part_03 .wrapper .carousel .box_m .pic:nth-child(" +
        (carouselIndex02 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel03(temp) {
    $(
      "article section.main .part_04 .wrapper .box figure.pic:nth-child(" +
        (carouselIndex03 + 1) +
        ")"
    ).fadeOut();
    carouselIndex03 =
      (carouselIndex03 + temp + carouselLength03) % carouselLength03;
    $(
      "article section.main .part_04 .wrapper .box figure.pic:nth-child(" +
        (carouselIndex03 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel04(temp) {
    $(
      "article section.main .part_05 .wrapper .box figure.pic:nth-child(" +
        (carouselIndex04 + 1) +
        ")"
    ).fadeOut();
    carouselIndex04 =
      (carouselIndex04 + temp + carouselLength04) % carouselLength04;
    $(
      "article section.main .part_05 .wrapper .box figure.pic:nth-child(" +
        (carouselIndex04 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel05(temp) {
    $(
      "article section.main .part_07 .wrapper .box .pics:nth-child(" +
        (carouselIndex05 + 1) +
        ")"
    ).fadeOut();
    carouselIndex05 =
      (carouselIndex05 + temp + carouselLength05) % carouselLength05;
    $(
      "article section.main .part_07 .wrapper .box .pics:nth-child(" +
        (carouselIndex05 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel06(temp) {
    $(
      "article section.main .part_07 .wrapper .box_m .pic:nth-child(" +
        (carouselIndex06 + 1) +
        ")"
    ).fadeOut();
    carouselIndex06 =
      (carouselIndex06 + temp + carouselLength06) % carouselLength06;
    $(
      "article section.main .part_07 .wrapper .box_m .pic:nth-child(" +
        (carouselIndex06 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel07(temp) {
    $(
      "article section.main .part_09 .wrapper .box .pics:nth-child(" +
        (carouselIndex07 + 1) +
        ")"
    ).fadeOut();
    carouselIndex07 =
      (carouselIndex07 + temp + carouselLength07) % carouselLength07;
    $(
      "article section.main .part_09 .wrapper .box .pics:nth-child(" +
        (carouselIndex07 + 1) +
        ")"
    ).fadeIn();
  }

  function doCarousel08(temp) {
    $(
      "article section.main .part_09 .wrapper .box_m .pic:nth-child(" +
        (carouselIndex08 + 1) +
        ")"
    ).fadeOut();
    carouselIndex08 =
      (carouselIndex08 + temp + carouselLength08) % carouselLength08;
    $(
      "article section.main .part_09 .wrapper .box_m .pic:nth-child(" +
        (carouselIndex08 + 1) +
        ")"
    ).fadeIn();
  }

  $(document).ready(function() {
    // 03
    $(
      "article section.main .part_03 .wrapper .carousel .box .pics:nth-child(1)"
    ).show();
    $(
      "article section.main .part_03 .wrapper .carousel .box_m figure.pic:nth-child(1)"
    ).show();
    // 04
    $(
      "article section.main .part_04 .wrapper .box figure.pic:nth-child(1)"
    ).show();
    // 05
    $(
      "article section.main .part_05 .wrapper .box figure.pic:nth-child(1)"
    ).show();
    // 07
    $("article section.main .part_07 .wrapper .box .pics:nth-child(1)").show();
    $("article section.main .part_07 .wrapper .box_m .pic:nth-child(1)").show();
    // 09
    $("article section.main .part_09 .wrapper .box .pics:nth-child(1)").show();
    $("article section.main .part_09 .wrapper .box_m .pic:nth-child(1)").show();

    $(window)
      .focus(function() {
        carouselTimer01 = setInterval(function() {
          doCarousel01(1);
          doCarousel02(1);
          doCarousel03(1);
          doCarousel04(1);
          doCarousel05(1);
          doCarousel06(1);
          doCarousel07(1);
          doCarousel08(1);
        }, 3000);
      })
      .blur(function() {
        clearInterval(carouselTimer01);
      });

    carouselTimer01 = setInterval(function() {
      doCarousel01(1);
      doCarousel02(1);
      doCarousel03(1);
      doCarousel04(1);
      doCarousel05(1);
      doCarousel06(1);
      doCarousel07(1);
      doCarousel08(1);
    }, 3000);

    // carouselTimer01 = setInterval(function() {
    // }, 3000);
    // carouselTimer03 = setInterval(function() {
    // }, 3000);
    // carouselTimer04 = setInterval(function() {
    // }, 3000);
    // carouselTimer05 = setInterval(function() {
    // }, 3000);
    // carouselTimer06 = setInterval(function() {
    // }, 3000);
    // carouselTimer07 = setInterval(function() {
    // }, 3000);
    // carouselTimer08 = setInterval(function() {
    // }, 3000);

    $("#send").on("click", function() {
      gtag("event", "conversion", {
        send_to: "AW-766312472/1UWFCM3Y_5MBEJiAtO0C"
      });
    });
  });
})($);
