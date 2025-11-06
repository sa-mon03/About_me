/* ======================== */
/* FILE: script.js */
/* ======================== */


// 簡単なインタラクション: フッターの年を自動更新、スムーススクロール
(function(){
// 年の自動表示
document.getElementById('year').textContent = new Date().getFullYear();


// スムーススクロール（ナビリンク）
document.querySelectorAll('a[href^="#"]').forEach(function(a){
a.addEventListener('click', function(e){
var target = document.querySelector(this.getAttribute('href'));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth',block:'start'});
}
});
});
})();