$(function(){


// 失敗コード（slideDownに異常あり）;
  $('.co5-q').click(function(){
    var coAns = $(this).next('dd');

    if(coAns.hasClass('co5-a-active')){
      coAns.removeClass('co5-a-active');
      coAns.show();
      coAns.slideUp();
      $(this).find('.aco-plus').fadeIn();
    }else{
      coAns.addClass('co5-a-active');
      $('.co5-a-inner').hide();
      coAns.show().slideDown();
      $('.co5-a-inner').slideDown();
      $(this).find('.aco-plus').fadeOut();
    }
  });
  // クリック時に全てのアコーディオンが開いてしまう問題あり。
  // →原本ソースカンニングで解決。damn it.
  // ここから原本ソース
  //   var coAns = $('.co5-a');
  // →var coAns = $(this).next('dd');
  // ここまで原本ソース

});

// カレントタブメニュー（仮）
// 参考URL:https://qiita.com/Chinats/items/f947ec965175847bb858

$(function(){
  // 初期表示
  $('.cont7-panel').hide();
  $('.cont7-panel').eq(0).show();
  $('.cont7-panel').eq(0).addClass('tab-cur');
  // クリックイベント
  $('.cont7-tab').each(function(){
    $(this).on('click',function(){
      var index = $('.cont7-tab').index(this);
      $('.cont7-tab').removeClass('pan-cur');
      $(this).addClass('pan-cur');
      $('.cont7-panel').hide();
      $('.cont7-panel').eq(index).fadeIn();
    });
  });
});

// フォームページボタン
$(function(){
	// 基本的な関数
	var topBtn = $('#formbtn');
	// トップへスムーズスクロール
	topBtn.click(function(){
		var id = $(this).attr('href');
		var hpos = $(id).offset().top;
		$('html,body').animate({
			scrollTop:hpos
		},850);
	});

	// スクロールでボタン出現
	topBtn.hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 1250){
			topBtn.fadeIn();
		}else{
      topBtn.fadeOut();
		}
	});

  // topBtn.hover(
  //   function(){
  //     topBtn.animate({
  //       'opacity':'0.9','transform':'scale(1.2)rotate(0.9deg)'
  //     },1500);
  //   },
  //   function(){
  //     topBtn.animate({
  //       'opacity':'1','transform':'scale(1)rotate(1deg)'
  //     },1500);
  //   }
  // );

});

$(function(){
  // スマホver
  // 基本的な関数
  var topBtnsp = $('#formbtnsp');
  // トップへスムーズスクロール
  topBtnsp.click(function(){
    var id = $(this).attr('href');
    var hpos = $(id).offset().top;
    $('html,body').animate({
      scrollTop:hpos
    },850);
  });

  // スクロールでボタン出現
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      topBtnsp.fadeIn();
    }else{
      topBtnsp.fadeOut();
    }
  });
});









// ここまでトップページボタン
