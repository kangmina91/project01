$(function () {
    // document.querySelector('h1').style.display = 'none';
    // 자바스크립트 방식
    // $('h1').css({ display: 'none' })
    // 제이쿼리 방식
    // $('h1').hide();
    // 제이쿼리 메소드 방식

    // var --> const , let
    const option = {
        anchors: ['01', '02', '03'],
        afterRender: function () {
            setTimeout(function () { $('.section').eq(0).addClass('on') })
        },


        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('h1 span').text(nextIndex)
            $('nav li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
        },
    }
    $('.main_full').fullpage(option);


})




