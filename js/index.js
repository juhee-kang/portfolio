$(document).ready(function () {
    
    var ww = $(window).width();

    //main_section
    $('.menu_wrap>li').click(function () {

        var sh = $('section').height();
        var menu = $(this).index();

        $('body,html').animate({
            scrollTop: sh * menu
        }, 1000);

    });

    //web_menu
    $('.web_con').each(function (index) {
        $(this).attr('data-index', index);
    }).first().css({
        display: 'block'
    });

    $('.web_menu').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var web = $(this).attr('data-index');
        $('.web_con[data-index!=' + web + ']').fadeOut(300)
        $('.web_con[data-index=' + web + ']').fadeIn(300);

        $('.web_menu[data-index!=' + web + ']').removeClass('on');
        $('.web_menu[data-index=' + web + ']').addClass('on');
    });
    
    //mobile about_me click
    if(ww < 640){
        
        mclick_me = 0;
        
        $('.m_btn').click(function(){
            mclick_me++;
            if(mclick_me > 2){
                mclick_me = 0;
            }
            
            $('.container_wrap').stop().animate({
               left:-300*mclick_me 
            });
        });
    }

    //mousewheel
    if(ww >= 640){
        
        $("section").on("mousewheel", function (event, delta) {
            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $('html,body').stop().animate({
                    scrollTop: prev
                }, 1000);

            } else if (delta < 0) {
                var next = $(this).next().offset().top;

                $('html,body').stop().animate({
                    scrollTop: next
                }, 1000);

            }
        
    
        });
    }

}); //end
