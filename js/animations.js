/**
 * Created by pekowal on 18.08.17.
 */
$(function () {



    var animatedDiv = $('.scrollAnimated');

    animatedDiv.on('scrollSpy:enter', function() {

        let animationClass = $(this).data('animation');

        animatedDiv.addClass(animationClass);
        animatedDiv.addClass('in');

    });

    animatedDiv.on('scrollSpy:exit', function() {
        let animationClass = $(this).data('animation');

        animatedDiv.removeClass(animationClass);
        animatedDiv.removeClass('in');



    });

    animatedDiv.scrollSpy();
    // $( window ).scroll(function() {
    //
    //     if (animatedDiv.visible(true)) {
    //         animatedDiv.addClass('.in');
    //         // The element is visible, do something
    //     } else {
    //         // The element is NOT visible, do something else
    //     }
    //
    // });

});