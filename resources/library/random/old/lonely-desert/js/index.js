'use strict';

var renderer = undefined;
var camera = undefined;
var controls = undefined;
var scene = undefined;
var container = document.getElementsByClassName('container')[0];
var w = container.offsetWidth;
var h = container.offsetHeight;
var ground = {};
var uniforms = {
	resolution: {
		value: new THREE.Vector2(w, h)
	},
	uvScale: {
		value: new THREE.Vector2(1.0, 1.0)
	}
};

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(w, h);
	renderer.setClearColor(0xEFEFEF);
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
	camera.position.set(100, 0, 0);
	camera.lookAt(scene.position);

	// controls = new THREE.OrbitControls( camera, renderer.domElement );
	// //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.2;
	// controls.rotateSpeed = 0.3;

	var hemilight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 1);

	scene.add(hemilight);

	scene.add(camera);
	scene.add(background());
	buildGround().then(render);
	// render();
	console.log(ground);
}

function background(scene) {
	var geo = new THREE.PlaneBufferGeometry(10000, 10000);
	var material = new THREE.ShaderMaterial({
		uniforms: uniforms,
		fragmentShader: backgroundShader()
	});
	var mesh = new THREE.Mesh(geo, material);
	// const mesh = new THREE.Mesh(geo, new THREE.MeshNormalMaterial());
	mesh.position.set(-100, 0, 0);
	mesh.rotation.set(0, Math.PI / 2, 0);
	mesh.scale.set(1, 1, -1);
	return mesh;
}

function buildGround() {
	return new Promise(function (resolve, reject) {
		var geo = new THREE.IcosahedronGeometry(40, 3);
		// const normalMat = new THREE.MeshPhongMaterial({color: 0xFF00FF, shading: THREE.FlatShading});
		var normalMat = new THREE.MeshPhongMaterial({ color: 0xc1994a, shading: THREE.FlatShading });
		ground = new THREE.Mesh(geo, normalMat);
		geo.verticesNeedUpdate = true;
		geo.vertices.forEach(function (vert) {
			var randomTranslate = Math.floor(Math.random() * 10) + 1;
			var plusMinus = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
			randomTranslate *= plusMinus;
			vert.y += randomTranslate;
		});
		geo.verticesNeedUpdate = true;

		ground.position.set(0, -65, 0);
		ground.scale.set(1, 1, 8);

		scene.add(ground);
		resolve();
	});
}

// function backgroundShader() {
// 	return `
// 		uniform vec2 resolution;

// 		float plot(vec2 st, float pct) {
// 			return smoothstep( pct - 0.02, pct, st.y ) - smoothstep( pct, pct + 0.02, st.y );
// 		}
// 		void main() {
// 			vec2 st = gl_FragCoord.xy/resolution;

// 			float y = smoothstep(0.1, 0.9, st.x);

// 			vec3 color = vec3(y);

// 			float pct = plot(st, y);
// 			color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);

// 			gl_FragColor = vec4(color, 1.0);
// 			// gl_FragColor = vec4(1.0, 0, 1.0, 1.0);
// 		}
// 	`
// }
function backgroundShader() {
	return '\n\t\t// #ifdef GL_ES\n\t\t// precision mediump float;\n\t\t// #endif\n\t\tuniform vec2 resolution;\n\n\t\tfloat square(float s) { return s * s; }\n\n\t\tvec3 desertGradient(float t) {\n\t\t\tfloat s = sqrt(clamp(1.0 - (t - 0.4) / 0.6, 0.0, 1.0));\n\t\t\t// vec3 sky = sqrt(mix(vec3(1, 1, 1), vec3(0, 0.8, 1.0), smoothstep(0.4, 0.9, t)) * vec3(s, s, 1.0));\n\t\t\tvec3 sky = sqrt(mix(vec3(1, 1, 1), vec3(0, 0.8, 1.0), smoothstep(0.4, 0.9, t)) * vec3(s, s, 1.0));\n\t\t\tvec3 land = mix(vec3(0.7, 0.3, 0.0), vec3(0.85, 0.75 + max(0.8 - t * 20.0, 0.0), 0.5), square(t / 0.4));\n\t\t\treturn clamp((t > 0.4) ? sky : land, 0.0, 1.0) * clamp(1.5 * (1.0 - abs(t - 0.4)), 0.0, 1.0);\n\t\t}\n\n\t\tvoid main() {\n\t\t\tvec2 st = gl_FragCoord.xy / resolution.xy;\n\t\t\t// float t = gl_FragCoord.y / resolution.x;\n\t\t\t\n\t\t\t// gl_FragColor = vec4(st.y, st.y, st.y, 1.0);\n\t\t\tgl_FragColor = vec4(0.4, 0.4, st.y, 1.0);\n\t\t\t// gl_FragColor = vec4(desertGradient(t), 1.0);\n\t\t}\n\t';
}

function render() {
	window.requestAnimationFrame(render);
	renderer.render(scene, camera);
	// controls.update();
	ground.rotation.z -= 0.001;
}

init();

window.addEventListener('resize', function () {
	w = container.offsetWidth;
	h = container.offsetHeight;

	uniforms.resolution.value.x = w;
	uniforms.resolution.value.y = h;

	renderer.setSize(w, h);
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
}, false);