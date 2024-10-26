$(function(){
    // ランダムに表示させたいイメージ名を配列に格納
    let thumbnaileFileNameArray = [
        "info-241120-icon-funi",
        "info-241120-icon-inu",
        "info-241120-icon-powa"
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
