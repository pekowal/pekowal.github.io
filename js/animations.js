/**
 * Created by pekowal on 18.08.17.
 */
$(function () {



    var animatedDiv = $('.scrollimation');

    animatedDiv.on('scrollSpy:enter', function() {
        animatedDiv.addClass('in');
        console.log('enter:', $(this).attr('id'));
    });

    animatedDiv.on('scrollSpy:exit', function() {

        animatedDiv.removeClass('in');

        console.log('exit:', $(this).attr('id'));
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