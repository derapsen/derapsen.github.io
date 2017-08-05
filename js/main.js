/**
*	tab切り替え（header用）
**/
$('.tab li').click(
	function()
	{
		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab li').index(this);

		//コンテンツを一度すべて非表示にし、	
		$('.middleBox .contents').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.middleBox .contents').eq(index).css('display','block');

		//一度タブについているクラスselect,activeを消し、
		$('.tab li').removeClass('select');
		$('.tab li').removeClass('active');

		//クリックされたタブのみにクラスselect,activeをつけます。
		$(this).addClass('select')
		$(this).addClass('active')
	}
);

/**
*	tab切り替え（gnavi用）
**/
$('.tab div').click(
	function()
	{
		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab div').index(this);

		//コンテンツを一度すべて非表示にし、	
		$('.middleBox .contents').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.middleBox .contents').eq(index).css('display','block');
		
//		$('.panel').css('border-style','none');

		//一度タブについているクラスselectを消し、
		$('.tab div').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	}
);

/**
*	.jsの設定
**/
