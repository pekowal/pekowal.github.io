$(function () {



    $(window).scroll(() =>{


        let scrolledTop = $(window).scrollTop();

        if (scrolledTop > 0){


            $('#main-nav').addClass('scrolled');
        }else{
            $('#main-nav').removeClass('scrolled');

        }

        console.log(scrolledTop);
    });


    $('#main-content')

});