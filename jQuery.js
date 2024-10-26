$(function(){
    // ランダムに表示させたいイメージ名を配列に格納
    let thumbnaileFileNameArray = [
        "info-241120-loading01",
        "info-241120-loading02",
        "info-241120-loading03",
        "info-241120-loading04",
        "info-241120-loading05",
        "info-241120-loading06",
        "info-241120-loading07",
        "info-241120-loading08",
        "info-241120-loading09",
        "info-241120-loading10"
    ];
    // ランダム表示させたいimg要素を定義
    let $thumbnaileImgElement = $("#random_thumbnaile img");

    // 関数の実行
    randomImage(thumbnaileFileNameArray, $thumbnaileImgElement)
});


/****************************
ランダム表示する関数
第１引数：イメージ名配列
第２引数：イメージ要素（jQuery型）
*****************************/
function randomImage ( imgArray, $target){
    var num = Math.random();
    num = Math.floor(num * imgArray.length);
    $target.attr("src", "https://weds-241120.github.io/invitation/" + imgArray[num] + ".png");
};



// スライドインアニメーション
$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();

            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
    });
});



// トップへ戻る
$(document).ready(function () {
    $("#top-btn").hide();　//ボタンを非表示にする
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1600) { //ページの上から100pxスクロールした時
            $("#top-btn").fadeIn("slow"); //ボタンがフェードインする
        } else {
            $("#top-btn").fadeOut("slow");　//ボタンがフェードアウトする
        }
        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $("footer").innerHeight(); //止めたい位置の高さ(今回はfooter)
        if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
            $("#top-btn").css({
                "position": "absolute", //pisitionをabsoluteに変更
            });
        } else { //それ以外の場合は
            $("#top-btn").css({
                "position": "fixed", //固定表示
            });
        }
    });
 
 
//スムーススクロール設定
    $('#top-btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);　//スムーススクロールの速度
        return false;
    });
});
