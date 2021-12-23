<?php
	// 가상 회원 데이터(json)를 만들어서 서버에 업로드 한다.
	$data = '[
		{"id":"1","name":"Choldcroft","email":"dcroft0@hibu.com"},
		{"id":"2","name":"Levi","email":"wlevi1@blogger.com"},
		{"id":"3","name":"Axcell","email":"laxcellc@ebay.co.uk"}
	]';
	// $_GET["callback"]은 HTML문서에서 GET방식으로 전송한 데이터를 받기 위한 매개변수이다.
	echo $_GET["callback"]."(".$data.")"; 
?>