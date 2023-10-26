
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

	
	const greenPlane = new THREE.Mesh(greenPlane2Geometry, greenPlaneMaterial);
	// 평면 위치를 회색 배경 가운데로 이동
	greenPlane.position.set(-160, 0, 110);
	greenPlane.rotation.x = -Math.PI / 2;	// 평면을 수평으로 회전
	scene.add(greenPlane);

	// 추가 초록색 배경 평면 생성 (greenPlane2)
	const greenPlane2 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane2.position.set(-160, 0, -110); // 왼쪽위 사각형
	greenPlane2.rotation.x = -Math.PI / 2;
	scene.add(greenPlane2);

	// 추가 초록색 배경 평면 생성 (greenPlane3)
	const greenPlane3 = new THREE.Mesh(greenPlaneGeometry, greenPlaneMaterial);
	greenPlane3.position.set(160, 0, -110); // 오른쪽위 사각형
	greenPlane3.rotation.x = -Math.PI / 2;
	scene.add(greenPlane3);

	// greenPlane2의 테두리 생성
	const green2Geometry = new THREE.PlaneGeometry(203,142);
	const greenPlane2Edges = new THREE.EdgesGeometry(green2Geometry);
	const greenPlane2Line = new THREE.LineSegments(greenPlane2Edges, new THREE.LineBasicMaterial({
		color: 0xE0E0E0, // 테두리의 색상을 초록색(0x00FF00)으로 변경
		linewidth: 100,
		scale:100,
	}));
	greenPlane2.add(greenPlane2Line);

	// greenPlane3의 테두리 생성
	const greenPlane3Geometry = new THREE.PlaneGeometry(203,143);
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

	function animate() {
		// 모델을 X축 주위로 회전
		if (car) {
			car.rotation.z += 0.005; // 회전 속도 조절
			
		}
	 
		renderer.render(scene,camera);
		requestAnimationFrame(animate);
	 }
	 

}


