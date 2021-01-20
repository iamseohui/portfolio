$(function(){
	var scr=t=app=winW=r=gnbH=0;
	
	//fullpage
	$('#fullpage').fullpage({
		afterLoad: function(origin, destination, direction){
			//색인 사용
			if(destination.index > 0){
				$('.header nav').addClass('fixed');
			}else{
				$('.header nav').removeClass('fixed');
			}
		}
	});
	
	// typed
	$('.typed-cursor').typed({
		strings:["<strong>Hello,</strong> I am Seohui Lee. <br/> I am a junior web publisher."],
		typeSpeed: 50,
		backDelay: 200,
		showCursor: false,
		loop:true
	});
	
	// skills
	$('#progressbar1').LineProgressbar({
		percentage: 95
	});
	$('#progressbar2').LineProgressbar({
		percentage: 90
	});
	$('#progressbar3').LineProgressbar({
		percentage: 80
	});
	$('#progressbar4').LineProgressbar({
		percentage:80
	});
	$('#progressbar5').LineProgressbar({
		percentage:80
	});
	$('#progressbar6').LineProgressbar({
		percentage:70
	});
	
	// portfolio swiper slide
	var swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		keyboard: true,
		loop:true,
    });
	
	// map
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		mapOption = { 
			center: new kakao.maps.LatLng(37.2825656043051, 127.00498592231736), // 지도의 중심좌표
			level: 12 // 지도의 확대 레벨
		};

		var map = new kakao.maps.Map(mapContainer, mapOption);

		// 마커가 표시될 위치입니다 
		var markerPosition  = new kakao.maps.LatLng(37.2825656043051, 127.00498592231736); 

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);

		var iwContent = '<div style="padding:5px 50px;">Suwon', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwPosition = new kakao.maps.LatLng(37.2825656043051, 127.00498592231736); //인포윈도우 표시 위치입니다

		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
			position : iwPosition, 
			content : iwContent 
		});
		  
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
		infowindow.open(map, marker);
});