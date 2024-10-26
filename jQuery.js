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
let winHeight,winScroll,scrollPos;
$(window).on('load scroll',function(){
    winScroll = $(window).scrollTop();
    winHeight = $(window).height();
    scrollPos = winHeight * 0.9 + winScroll;
    $(".slidein").each(function(){
        if($(this).offset().top <= scrollPos){
            $(this).addClass("show");
        }else{
            $(this).removeClass("show");
        }
    });
});
