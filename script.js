$(function (){
    $('button').click(function () {
        $('.nav_body').toggleClass('opened')
        $('body, html').toggleClass('lock')


    });
});

$(function() {
    var item = $(".point"), indx = -1, len = item.length;
    (function go()
    {
        indx = ++indx % len;
        !indx && item.hide();
item.eq(indx).delay(2000).fadeToggle(100, go)
}())
});


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}



// $('.myVideo').on('click', function () {
//     this.muted = false;
//     this.currentTime = 0;
//     this.loop = false;
// })


$(function (){
    $('.widget__body').click(function () {
        $('.widget__body').addClass('opened')
        $('.widget_close').addClass('opened')
        $('.myVideo').attr('muted', false)


    });

    $('.widget_close').click(function () {
        $('.widget__body').removeClass('opened')
        $('.widget_close').removeClass('opened')

    });
});







// const myVideo = document.querySelector('.myVideo');
// const widgetBody = document.querySelector('.widget__body');
// const widgetClose = document.querySelector('.widget_close');
//
//
// myVideo.addEventListener('click', () => {
//     widgetBody.classList.add('opened');
//     widgetClose.classList.add('opened');
// });
//
// widgetBody.addEventListener('click', () => {
//     myVideo.removeAttribute('muted');
// })
//
// widgetClose.addEventListener('click', () => {
//     widgetBody.classList.remove('opened');
//     widgetClose.classList.remove('opened');
//     myVideo.getAttribute('muted');
// });


