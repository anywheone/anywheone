
//pagetop 画面右下の↑ボタンを隠しておき、スクロールしてから表示させる
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});

//スムーススクロール(jQueryのoffsetで取得した要素の座標へスクロール)
$(window).on('load', function() {
	var hash = location.hash;
	if(hash) {
		$('body,html').scrollTop(0);
		setTimeout(function() {
			var target = $(hash);
			var scroll = target.offset().top;
			$('body,html').animate({scrollTop:scroll},500);
		}, 100);
	}
});

window.addEventListener('beforeunload', function(e){
  /** 更新される直前の処理 */
  $('body,html').scrollTop(0);
});
