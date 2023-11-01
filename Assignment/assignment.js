
window.onload = function init()
{
	const canvas = document.getElementById( "gl-canvas" );
	canvas.width = 2500;
	canvas.height = 1300;

	const renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize(canvas.width,canvas.height);

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x808080);

	// 연두색 배경을 추가할 평면 생성
	const greenPlaneGeometry = new THREE.PlaneGeometry(200, 140); // 평면의 크기 설정
	const greenPlane2Geometry = new THREE.PlaneGeometry(200,80);
	const greenPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0xCCFF99 }); // 연두색 배경
	
	//직각주차 배경
	const parkPlaneGeometry = new THREE.PlaneGeometry(40,130);
	const parkPlane2Geometry = new THREE.PlaneGeometry(60,40);
	const parkPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 }); // 연두색 배경
	
	const greenPlane = new THREE.Mesh(greenPlane2Geometry, greenPlaneMaterial);
	// 평면 위치를 회색 배경 가운데로 이동
	greenPlane.position.set(-160, 0, 110);
	greenPlane.rotation.x = -Math.PI / 2;	// 평면을 수평으로 회전
	scene.add(greenPlane);
	
	// greenPlane4의 테두리 생성
	const line1Width = 4;
	const rectangle1Width = 80;
	const rectangle1Height = 1;
	const borderGeometry1 = new THREE.BoxGeometry(rectangle1Width, rectangle1Height, line1Width);
	const borderMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle1 = new THREE.Mesh(borderGeometry1, borderMaterial1);
	borderRectangle1.position.set(-60, 0 ,110);
	borderRectangle1.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle1);
	
	const line11Width = 206;
	const rectangle11Width = 4;
	const rectangle11Height = 1;
	const borderGeometry11= new THREE.BoxGeometry(rectangle11Width, rectangle11Height, line11Width);
	const borderMaterial11 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle11 = new THREE.Mesh(borderGeometry11, borderMaterial11);
	borderRectangle11.position.set(-161, 0 ,70);
	borderRectangle11.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle11);

	const line111Width = 4;
	const rectangle111Width = 80;
	const rectangle111Height = 1;
	const borderGeometry111 = new THREE.BoxGeometry(rectangle111Width, rectangle111Height, line111Width);
	const borderMaterial111 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle111 = new THREE.Mesh(borderGeometry111, borderMaterial111);
	borderRectangle111.position.set(-262, 0 ,110);
	borderRectangle111.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle111);

	const line1111Width = 206;
	const rectangle1111Width = 4;
	const rectangle1111Height = 1;
	const borderGeometry1111 = new THREE.BoxGeometry(rectangle1111Width, rectangle1111Height, line1111Width);
	const borderMaterial1111 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle1111 = new THREE.Mesh(borderGeometry1111, borderMaterial1111);
	borderRectangle1111.position.set(-161, 0 ,150);
	borderRectangle1111.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle1111);

	// 추가 초록색 배경 평면 생성 (greenPlane2)
	const greenPlane2 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane2.position.set(-160, 0, -110); // 왼쪽위 사각형
	greenPlane2.rotation.x = -Math.PI / 2;
	scene.add(greenPlane2);

	const line2Width = 4;
	const rectangle2Width = 139;
	const rectangle2Height = 1;
	const borderGeometry2 = new THREE.BoxGeometry(rectangle2Width, rectangle2Height, line2Width);
	const borderMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle2 = new THREE.Mesh(borderGeometry2, borderMaterial2);
	borderRectangle2.position.set(-60, 0 ,-110);
	borderRectangle2.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle2);
	

	const line222Width = 4;
	const rectangle222Width = 142;
	const rectangle222Height = 1;
	const borderGeometry222 = new THREE.BoxGeometry(rectangle222Width, rectangle222Height, line222Width);
	const borderMaterial222 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle222 = new THREE.Mesh(borderGeometry222, borderMaterial222);
	borderRectangle222.position.set(-262, 0 ,-111);
	borderRectangle222.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle222);

	const line2222Width = 203;
	const rectangle2222Width = 4;
	const rectangle2222Height = 1;
	const borderGeometry2222 = new THREE.BoxGeometry(rectangle2222Width, rectangle2222Height, line2222Width);
	const borderMaterial2222 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle2222 = new THREE.Mesh(borderGeometry2222, borderMaterial2222);
	borderRectangle2222.position.set(-160, 0 ,-181);
	borderRectangle2222.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle2222);


	// 추가 초록색 배경 평면 생성 (greenPlane3)
	const greenPlane3 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane3.position.set(160, 0, -110); // 오른쪽위 사각형
	greenPlane3.rotation.x = -Math.PI / 2;
	scene.add(greenPlane3);

	// greenPlane3의 테두리 생성
	const line3Width = 4;
	const rectangle3Width = 145;
	const rectangle3Height = 1;
	const borderGeometry3 = new THREE.BoxGeometry(rectangle3Width, rectangle3Height, line3Width);
	const borderMaterial3 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle3 = new THREE.Mesh(borderGeometry3, borderMaterial3);
	borderRectangle3.position.set(261, 0 ,-110);
	borderRectangle3.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle3);
	
	const line33Width = 190;
	const rectangle33Width = 4;
	const rectangle33Height = 1;
	const borderGeometry33= new THREE.BoxGeometry(rectangle33Width, rectangle33Height, line33Width);
	const borderMaterial33 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle33 = new THREE.Mesh(borderGeometry33, borderMaterial33);
	borderRectangle33.position.set(167, 0 ,-39);
	borderRectangle33.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle33);

	const line333Width = 4;
	const rectangle333Width = 143;
	const rectangle333Height = 1;
	const borderGeometry333 = new THREE.BoxGeometry(rectangle333Width, rectangle333Height, line333Width);
	const borderMaterial333 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle333 = new THREE.Mesh(borderGeometry333, borderMaterial333);
	borderRectangle333.position.set(60, 0 ,-110);
	borderRectangle333.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle333);

	const line3333Width = 202;
	const rectangle3333Width = 4;
	const rectangle3333Height = 1;
	const borderGeometry3333 = new THREE.BoxGeometry(rectangle3333Width, rectangle3333Height, line3333Width);
	const borderMaterial3333 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle3333 = new THREE.Mesh(borderGeometry3333, borderMaterial3333);
	borderRectangle3333.position.set(160, 0 ,-181);
	borderRectangle3333.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle3333);

	const greenPlane4 = new THREE.Mesh(greenPlane2Geometry, greenPlaneMaterial);
	greenPlane4.position.set(160, 0, 110); // 오른쪽 아래 사각형
	greenPlane4.rotation.x = -Math.PI / 2;
	scene.add(greenPlane4);

	// greenPlane4의 테두리 생성
	const line4Width = 4;
	const rectangle4Width = 80;
	const rectangle4Height = 1;
	const borderGeometry4 = new THREE.BoxGeometry(rectangle4Width, rectangle4Height, line4Width);
	const borderMaterial4 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle4 = new THREE.Mesh(borderGeometry4, borderMaterial4);
	borderRectangle4.position.set(262, 0 ,110);
	borderRectangle4.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle4);
	
	const line44Width = 206;
	const rectangle44Width = 4;
	const rectangle44Height = 1;
	const borderGeometry44= new THREE.BoxGeometry(rectangle44Width, rectangle44Height, line44Width);
	const borderMaterial44 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle44 = new THREE.Mesh(borderGeometry44, borderMaterial44);
	borderRectangle44.position.set(161, 0 ,70);
	borderRectangle44.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle44);

	const line444Width = 4;
	const rectangle444Width = 80;
	const rectangle444Height = 1;
	const borderGeometry444 = new THREE.BoxGeometry(rectangle444Width, rectangle444Height, line444Width);
	const borderMaterial444 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle444 = new THREE.Mesh(borderGeometry444, borderMaterial444);
	borderRectangle444.position.set(60, 0 ,110);
	borderRectangle444.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle444);

	const line4444Width = 206;
	const rectangle4444Width = 4;
	const rectangle4444Height = 1;
	const borderGeometry4444 = new THREE.BoxGeometry(rectangle4444Width, rectangle4444Height, line4444Width);
	const borderMaterial4444 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 노란색
	const borderRectangle4444 = new THREE.Mesh(borderGeometry4444, borderMaterial4444);
	borderRectangle4444.position.set(161, 0 ,150);
	borderRectangle4444.rotation.y = -Math.PI / 2;
	scene.add(borderRectangle4444);

	// 추가 직각주차 배경 평면 생성 (greenPlane2)
	const parkPlane1 = new THREE.Mesh(parkPlaneGeometry, parkPlaneMaterial);
	parkPlane1.position.set(-165, 0, -102); // 왼쪽위 사각형
	parkPlane1.rotation.x = -Math.PI / 2;
	scene.add(parkPlane1);

	const parkPlane2 = new THREE.Mesh(parkPlane2Geometry, parkPlaneMaterial);
	parkPlane2.position.set(-210, 0, -102); // 왼쪽위 사각형
	parkPlane2.rotation.x = -Math.PI / 2;
	scene.add(parkPlane2);

	//노란차선

		// 라인의 두께를 설정
		const lineWidth1 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth1 = 150;
		const rectangleHeight1 = 1;
		// 직사각형을 생성
		const geometry1 = new THREE.BoxGeometry(rectangleWidth1, rectangleHeight1, lineWidth1);
		const material1 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle1 = new THREE.Mesh(geometry1, material1);
		rectangle1.position.set(0, 0 ,-155);
		rectangle1.rotation.y = -Math.PI / 2;
		scene.add(rectangle1);


		// 라인의 두께를 설정
		const lineWidth11 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth11 = 90;
		const rectangleHeight11 = 1;
		// 직사각형을 생성
		const geometry11 = new THREE.BoxGeometry(rectangleWidth11, rectangleHeight11, lineWidth11);
		const material11 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle11 = new THREE.Mesh(geometry11, material11);
		rectangle11.position.set(0, 0 ,155);
		rectangle11.rotation.y = -Math.PI / 2;
		scene.add(rectangle11);


		// 라인의 두께를 설정
		const lineWidth2 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth2 = 600;
		const rectangleHeight2 = 1;
		// 직사각형을 생성
		const geometry2 = new THREE.BoxGeometry(rectangleWidth2, rectangleHeight2, lineWidth2);
		const material2 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle2 = new THREE.Mesh(geometry2, material2);
		rectangle2.position.set(0, 0 ,200);
		scene.add(rectangle2);

		// 라인의 두께를 설정
		const lineWidth22 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth22 = 600;
		const rectangleHeight22 = 1;
		// 직사각형을 생성
		const geometry22 = new THREE.BoxGeometry(rectangleWidth22, rectangleHeight22, lineWidth22);
		const material22 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle22 = new THREE.Mesh(geometry22, material22);
		rectangle22.position.set(0, 0 ,-230);
		scene.add(rectangle22);

		// 라인의 두께를 설정
		const lineWidth3 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth3 = 160;
		const rectangleHeight3 = 1;
		// 직사각형을 생성
		const geometry3 = new THREE.BoxGeometry(rectangleWidth3, rectangleHeight3, lineWidth3);
		const material3 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle3 = new THREE.Mesh(geometry3, material3);
		rectangle3.position.set(-295, 0 ,120);
		rectangle3.rotation.y = -Math.PI / 2;
		scene.add(rectangle3);

		// 라인의 두께를 설정
		const lineWidth33 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth33 = 250;
		const rectangleHeight33 = 1;
		// 직사각형을 생성
		const geometry33 = new THREE.BoxGeometry(rectangleWidth33, rectangleHeight33, lineWidth33);
		const material33 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle33 = new THREE.Mesh(geometry33, material33);
		rectangle33.position.set(-295, 0 ,-110);
		rectangle33.rotation.y = -Math.PI / 2;
		scene.add(rectangle33);


		// 라인의 두께를 설정
		const lineWidth333 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth333 = 80;
		const rectangleHeight333 = 1;
		// 직사각형을 생성
		const geometry333 = new THREE.BoxGeometry(rectangleWidth333, rectangleHeight333, lineWidth333);
		const material333 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle333 = new THREE.Mesh(geometry333, material333);
		rectangle333.position.set(295, 0 ,-190);
		rectangle333.rotation.y = -Math.PI / 2;
		scene.add(rectangle333);

		// 라인의 두께를 설정
		const lineWidth3333 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth3333 = 50;
		const rectangleHeight3333 = 1;
		// 직사각형을 생성
		const geometry3333 = new THREE.BoxGeometry(rectangleWidth3333, rectangleHeight3333, lineWidth3333);
		const material3333 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle3333 = new THREE.Mesh(geometry3333, material3333);
		rectangle3333.position.set(295, 0 , -60);
		rectangle3333.rotation.y = -Math.PI / 2;
		scene.add(rectangle3333);


		// 라인의 두께를 설정
		const lineWidth4 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth4 = 200;
		const rectangleHeight4 = 1;
		// 직사각형을 생성
		const geometry4 = new THREE.BoxGeometry(rectangleWidth4, rectangleHeight4, lineWidth4);
		const material4 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle4 = new THREE.Mesh(geometry4, material4);
		rectangle4.position.set(-200, 0 ,15);
		scene.add(rectangle4);

		// 라인의 두께를 설정
		const lineWidth5= 10;
		// 직사각형의 크기 설정
		const rectangleWidth5 = 150;
		const rectangleHeight5 = 1;
		// 직사각형을 생성
		const geometry5 = new THREE.BoxGeometry(rectangleWidth5, rectangleHeight5, lineWidth5);
		const material5 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle5 = new THREE.Mesh(geometry5, material5);
		rectangle5.position.set(180, 0 ,15);
		scene.add(rectangle5);


		// 라인의 두께를 설정
		const lineWidth6 = 10;
		// 직사각형의 크기 설정
		const rectangleWidth6 = 140;
		const rectangleHeight6 = 1;
		// 직사각형을 생성
		const geometry6 = new THREE.BoxGeometry(rectangleWidth6, rectangleHeight6, lineWidth6);
		const material6 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // 노란색
		const rectangle6 = new THREE.Mesh(geometry6, material6);
		rectangle6.position.set(295, 0 ,135);
		rectangle6.rotation.y = -Math.PI / 2;
		scene.add(rectangle6);


	//가속구간

		// 라인의 두께를 설정
		const lineWidth7 = 40;
		// 직사각형의 크기 설정
		const rectangleWidth7 = 120;
		const rectangleHeight7 = 1;
		// 직사각형을 생성
		const geometry7 = new THREE.BoxGeometry(rectangleWidth7, rectangleHeight7, lineWidth7);
		const material7 = new THREE.MeshBasicMaterial({ color: 'orange' }); // 노란색
		const rectangle7 = new THREE.Mesh(geometry7, material7);
		rectangle7.position.set(-125, 0 ,-255);
		scene.add(rectangle7);

		// 라인의 두께를 설정
		const lineWidth77 = 40;
		// 직사각형의 크기 설정
		const rectangleWidth77 = 300;
		const rectangleHeight77 = 1;
		
		// 직사각형을 생성
		const geometry77 = new THREE.BoxGeometry(rectangleWidth77, rectangleHeight77, lineWidth77);
		const material77 = new THREE.MeshBasicMaterial({ color: 'skyblue' }); // 노란색
		const rectangle77 = new THREE.Mesh(geometry77, material77);
		rectangle77.position.set(50, 0 ,-255);
		scene.add(rectangle77);


	//횡단보도

		var multi_cubeGeo = new THREE.BoxGeometry( 40, 0, 10 );
		var multi_material = new THREE.MeshBasicMaterial({ color: 0xffffff  });
		for ( var i = 0; i < 120; i = i + 20 ) {
			var multi_mesh = new THREE.Mesh( multi_cubeGeo, multi_material );
			multi_mesh.position.set(0, 0 ,-60);
			multi_mesh.position.x = -50 + i;
			multi_mesh.rotation.y = -Math.PI / 2;
			scene.add( multi_mesh );
		}

		for ( var i = 0; i < 120; i = i + 20 ) {
			var multi_mesh = new THREE.Mesh( multi_cubeGeo, multi_material );
			multi_mesh.position.set(0, 0 ,90);
			multi_mesh.position.x = -50 + i;
			multi_mesh.rotation.y = -Math.PI / 2;
			scene.add( multi_mesh );
		}


		for ( var i = 0; i < 120; i = i + 20 ) {
			var multi_mesh = new THREE.Mesh( multi_cubeGeo, multi_material );
			multi_mesh.position.set(-80, 0 ,0);
			multi_mesh.position.z = -35 + i;
			//multi_mesh.rotation.y = -Math.PI / 2;
			scene.add( multi_mesh );
		}

		for ( var i = 0; i < 120; i = i + 20 ) {
			var multi_mesh = new THREE.Mesh( multi_cubeGeo, multi_material );
			multi_mesh.position.set(80, 0 ,0);
			multi_mesh.position.z = -35 + i;
			//multi_mesh.rotation.y = -Math.PI / 2;
			scene.add( multi_mesh );
		}









	// 초기 카메라 설정
	camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

	// 카메라의 초기 위치를 위로 조절하여 top view 설정
	camera.position.set(0, 300, 0); // (X, Y, Z) 좌표 설정

	// 카메라가 아래를 보도록 방향 설정
	camera.rotation.x = -Math.PI / 2;

	// ...

	const controls = new THREE.OrbitControls(camera, renderer.domElement);


	light = new THREE.PointLight(0xc4c4c4,10);
	light.position.set(0,300,1000);
	scene.add(light);

	light2 = new THREE.PointLight(0xc4c4c4,10);
	light2.position.set(1000,300,0);
	scene.add(light2);

	light3 = new THREE.PointLight(0xc4c4c4,10);
	light3.position.set(0,300,-1000);
	scene.add(light3);

	const loader = new THREE.GLTFLoader();
	loader.load('./model/scene.gltf', function(gltf){
	  car = gltf.scene.children[0];
	  car.scale.set(0.05,0.05,0.05);
	  car.position.set(-200,0,170);
	  scene.add(gltf.scene);
	  animate();
	}, undefined, function (error) {
		console.error(error);
	});

	//신호등
	const loader2 = new THREE.GLTFLoader();
	loader2.load('./model/scene2.gltf', function(gltf){
	car2 = gltf.scene.children[0];
	car2.scale.set(1.5,1.5,1.5);
	car2.position.set(-70,0,-50);
	scene.add(gltf.scene);
	animate();
	}, undefined, function (error) {
		console.error(error);
	});


	function animate() {
		// 모델을 X축 주위로 회전
		if (car) {
			car.rotation.z += 0.005; // 회전 속도 조절
			
		}
	 
		renderer.render(scene,camera);
		requestAnimationFrame(animate);
	 }
	 

}


