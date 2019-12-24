$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    });

    $('ul.projects_tabs').on('click', 'li:not(.projects_tab_active)', function() {
        $(this)
          .addClass('projects_tab_active').siblings().removeClass('projects_tab_active')
          .closest('div.container').find('div.projects_content').removeClass('projects_content_active').eq($(this).index()).addClass('projects_content_active');
    });

});