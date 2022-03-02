/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/

// sidebar-toc というクラス名の要素のリストを取得し、その最初の要素を取得


var toc = document.getElementsByClassName('sidebar-toc')[0];
　
if (toc) {
    // スクロールが起きたときに関数を実行
    window.addEventListener('scroll', function () {
        // スクロール量が一定値より大きいとき
        // sidebar-toc のクラスに show を追加
        window.scrollY > 100 ? toc.classList.add('show') : toc.classList.remove('show');
    });
}