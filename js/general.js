$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

  $(".trainer-card").on("mouseenter", function () {
    $(this).addClass("flip");
  })
  $(".trainer-card").on("mouseleave", function () {
    $(this).removeClass("flip");
  })

  $(".trainer-card").on("touchstart", function () {
    $(this).closest(".trainers").find(".trainer-card").removeClass("flip");
    $(this).toggleClass("flip");
  })

	// Slider jQuery
  var window_width = $(window).width(),
  slider_item = $(".fitness-banner-slider li").length;
  $(".fitness-banner-slider li:first-child").addClass('active');
  $(".fitness-banner-slider li").height(window_width * 0.226);
  $(".fitness-banner-slider li").width(window_width);
  $(".fitness-banner-slider ul").width(window_width * slider_item);

  $(".next-btn").click(function () {
    var dataIndex = $(".fitness-banner-slider li.active").data("index")+1;
    $(".prev-btn").removeClass("disable");
    if ($(".fitness-banner-slider li.active").next().length) {
      $(".fitness-banner-slider li.active").addClass('next').next().addClass('active');
      $(".fitness-banner-slider li.next").removeClass('active next');
      var current_active = $(".fitness-banner-slider li.active").index();
      $(".fitness-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
    }
    if(dataIndex == 4){
      $(this).addClass("disable");
    }
  })

  $(".prev-btn").click(function () {
    var dataIndex = $(".fitness-banner-slider li.active").data("index")-1;
    $(".next-btn").removeClass("disable");
    if ($(".fitness-banner-slider li.active").prev().length) {

      $(".fitness-banner-slider li.active").addClass('prev').prev().addClass('active');
      $(".fitness-banner-slider li.prev").removeClass('active prev');
      var current_active = $(".fitness-banner-slider li.active").index();
      $(".fitness-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
    }
    if(dataIndex == 1){
      $(this).addClass("disable");
    }
  })

  $(window).resize(function (event) {
    window_width = $(window).width(),
    slider_item = $(".fitness-banner-slider li").length;
    $(".fitness-banner-slider li:first-child").addClass('active');
    $(".fitness-banner-slider li").height(window_width * 0.226);
    $(".fitness-banner-slider li").width(window_width);
    $(".fitness-banner-slider ul").width(window_width * slider_item);
    var current_active = $(".fitness-banner-slider li.active").index();
    $(".fitness-banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

  });
  /*mobile menu*/
  $(".hamburger-menu").click(function () {
    $("html,body").toggleClass("open-menu");
  });

});
