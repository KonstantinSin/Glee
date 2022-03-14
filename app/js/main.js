$(function(){


  $('.related__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
   
});  

  $('.detalis-one__item-num').styler();
  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
    
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });  

    $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data){
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },
    });


});
var mixer = mixitup('.week__content');
var mixer = mixitup('.design__content');


$('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
});