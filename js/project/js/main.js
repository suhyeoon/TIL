$(function(){
	
	// bxSlider : jQuery 기반의 반응형 이미지 슬라이더 플러그인
	$(".main-visual-slide").bxSlider({
		auto:true,
		pause:2000,
		autoHover:true,
		autoControls:true,
		autoControlsCombine:true
	});

	$("#notice-tab-wrap h4 a").on("click", tabmenu);
	
	function tabmenu(e) {
		e.preventDefault();
		var $ts = $(this);
		var $next = $ts.parent().next();
		if($next.is(":hidden")){
			$("#notice-tab-wrap h4 a").removeClass("on");
			$ts.addClass("on");
			$("#notice-tab-wrap > div:visible").hide();
			$next.show();
		}
	}
	
	// isotope : 항목별로 볼 수 있는 필터와 이미지 정렬을 해주는 플러그인
	// 포트폴리오, 제품 소개 항목에 주로 사용한다.
	$('.grid').isotope({		
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});    
});
