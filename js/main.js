

$(function () {

    $(".toggle_btn").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        } else {
            $("header").addClass("open");
        }
    });

    $('.mask').on('click', function () {
        $('header').removeClass('open');
    });

    $('.hamburger-menu ul li a').on('click', function () {
        $('header').removeClass('open');
    });

});

$(function () {

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position - 130 }, 800, "swing");

        return false;
    });
});

function fadeAnime() {

    $('.fadeUp').each(function () {
        var elemPos = $(this).offset().top - 0;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn-10');
        }
        // else {
        //     $(this).removeClass('fadeIn');
        // }
    });

    $('h3').each(function () {
        var elemPos = $(this).offset().top + 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn-50');
        }
        // else {
        //     $(this).removeClass('fadeIn-access');
        // }
    });
    $('.food-list-li').each(function () {
        var elemPos = $(this).offset().top + 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn-50');
        }
        // else {
        //     $(this).removeClass('fadeIn-access');
        // }
    });

    $('.border-fadeIn,.border-fadeIn .border').each(function () {
        var elemPos = $(this).offset().top + 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('active');
        }
        // else {
        //     $(this).removeClass('fadeIn-access');
        // }
    });
    
}






function delayScrollAnime() {
    var time = 0.3;//遅延時間を増やす秒数の値
    var value = time;
    $('.delayScroll').each(function () {
        var parent = this;					//親要素を取得
        var elemPos = $(this).offset().top;//要素の位置まで来たら
        var scroll = $(window).scrollTop();//スクロール値を取得
        var windowHeight = $(window).height();//画面の高さを取得
        var childs = $(this).children();	//子要素を取得

        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
            $(childs).each(function () {

                if (!$(this).hasClass("fadeUp-delay")) {//アニメーションのクラス名が指定されているかどうかをチェック

                    $(parent).addClass("play");	//親要素にクラス名playを追加
                    $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
                    $(this).addClass("fadeUp-delay");//アニメーションのクラス名を追加
                    value = value + time;//delay時間を増加させる

                    //全ての処理を終わったらplayを外す
                    var index = $(childs).index(this);
                    if ((childs.length - 1) == index) {
                        $(parent).removeClass("play");
                    }
                }
            })
        } else {
            $(childs).removeClass("fadeUp-delay");//アニメーションのクラス名を削除
            value = time;//delay初期値の数値に戻す
        }
    })
}

$(window).scroll(function () {
    fadeAnime();
    delayScrollAnime();
});

$(window).on('load', function () {
    fadeAnime();
    delayScrollAnime();
});