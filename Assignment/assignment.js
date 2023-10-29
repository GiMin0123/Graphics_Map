
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
	
	// greenPlane의 테두리 생성
	const greenGeometry = new THREE.PlaneGeometry(202,82);
	const greenPlaneEdges = new THREE.EdgesGeometry(greenGeometry);
	const greenPlaneLine = new THREE.LineSegments(greenPlaneEdges, new THREE.LineBasicMaterial({
		color: 0xE0E0E0, // 테두리의 색상을 초록색(0x00FF00)으로 변경
		linewidth: 100,
		scale:100,
	}));
	greenPlane.add(greenPlaneLine);


	// 추가 초록색 배경 평면 생성 (greenPlane2)
	const greenPlane2 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane2.position.set(-160, 0, -110); // 왼쪽위 사각형
	greenPlane2.rotation.x = -Math.PI / 2;
	scene.add(greenPlane2);

	// greenPlane2의 테두리 생성
	const green2Geometry = new THREE.PlaneGeometry(202,142);
	const greenPlane2Edges = new THREE.EdgesGeometry(green2Geometry);
	const greenPlane2Line = new THREE.LineSegments(greenPlane2Edges, new THREE.LineBasicMaterial({
		color: 0xE0E0E0, // 테두리의 색상을 초록색(0x00FF00)으로 변경
		linewidth: 100,
		scale:100,
	}));
	greenPlane2.add(greenPlane2Line);

	// 추가 초록색 배경 평면 생성 (greenPlane3)
	const greenPlane3 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane3.position.set(160, 0, -110); // 오른쪽위 사각형
	greenPlane3.rotation.x = -Math.PI / 2;
	scene.add(greenPlane3);

	// greenPlane3의 테두리 생성
	const greenPlane3Geometry = new THREE.PlaneGeometry(202,142);
	const greenPlane3Edges = new THREE.EdgesGeometry(greenPlane3Geometry);
	const greenPlane3Line = new THREE.LineSegments(greenPlane3Edges, new THREE.LineDashedMaterial({
		color: 0xE0E0E0, // 테두리의 색상을 파란색(0x0000FF)으로 변경
		linewidth:10,
		dashSize: 100,
		gapSize: 1,
	}));
	greenPlane3.add(greenPlane3Line);

	const greenPlane4 = new THREE.Mesh(greenPlane2Geometry, greenPlaneMaterial);
	greenPlane4.position.set(160, 0, 110); // 오른쪽 아래 사각형
	greenPlane4.rotation.x = -Math.PI / 2;
	scene.add(greenPlane4);

	// greenPlane4의 테두리 생성
	const greenPlane4Geometry = new THREE.PlaneGeometry(202,82);
	const greenPlane4Edges = new THREE.EdgesGeometry(greenPlane4Geometry);
	const greenPlane4Line = new THREE.LineSegments(greenPlane4Edges, new THREE.LineDashedMaterial({
		color: 0xE0E0E0, // 테두리의 색상을 파란색(0x0000FF)으로 변경
		linewidth:10,
		dashSize: 100,
		gapSize: 1,
	}));
	greenPlane4.add(greenPlane4Line);

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


