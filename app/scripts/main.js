jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    sliderB = document.getElementById('swiper-bague');
    sliderP = document.getElementById('swiper-pendentif');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
 
    window.mySwipeB = Swipe(sliderB, {
        speed:400,
        continuous:true,
        auto: 3000,
        callback : function(index, elem) {

        }
    });

    window.mySwipeP = Swipe(sliderP, {
        speed:400,
        continuous:false,
        callback : function(index, elem) {
            
        }
    });

    $('.swiper-controller').find('li').on('click', function(){
        var $this = $(this),
            $parent = $this.parent(),
            index = $this.data('to-slide');

        $parent.children().removeClass('active');
        $this.addClass('active');
        if ($parent.hasClass('bague')) {
            mySwipeB.slide(index, 300);
        } else {
            mySwipeP.slide(index, 300);
        }
    });

    $("#produits").isotope({
      // options
        itemSelector: '.square',
        layoutMode: 'fitRows'
    });

    $('#filters').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $("#produits").isotope({ filter: filterValue });
    });


});