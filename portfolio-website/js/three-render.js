//color variables
var dark = 0x272827;
var darkGrey = 0x3C3F42;
var mdGrey = 0x869293;
var light = 0xE3E6E8;
var pop = 0x26596C;


//THREE variables
var camera,
    mySphereCanvas = document.getElementById('three-sphere'),
    myTorusCanvas = document.getElementById('three-torus');
    myCubeCanvas = document.getElementById('three-cube');

    // Camera
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // Materials
    var materialWireframe = new THREE.MeshLambertMaterial({
      color: mdGrey, //material color
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    var materialShiny = new THREE.MeshPhongMaterial({
      // depthTest: false,
      color: dark, //material color
      shading: THREE.FlatShading,
      shininess: 100,
      specular: pop,
      // wireframe: true,
      // emissive: dark
    });


//If mySphereCanvas exists render the sphere
if (mySphereCanvas) {
  var sphereRenderer,
  sceneSphere;

  window.addEventListener("resize", function() {
    sphereRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });

  // sphereRenderer
  sphereRenderer = new THREE.WebGLRenderer({antialias: true});
  sphereRenderer.setSize( window.innerWidth, window.innerHeight);
  mySphereCanvas.appendChild( sphereRenderer.domElement );
  sphereRenderer.setClearColor(dark); //Background color of sphere canvas
  sphereRenderer.setPixelRatio(window.devicePixelRatio);

  //Scene
  sceneSphere = new THREE.Scene();

  // Lights
  var lightSphere = new THREE.AmbientLight(light, 0.3);
  sceneSphere.add(lightSphere);
  var light2Sphere = new THREE.PointLight(pop, 1);
  var light3Sphere = new THREE.PointLight(pop, 0.5);
  var light4Sphere = new THREE.PointLight(mdGrey, 1);
  var light5Sphere = new THREE.PointLight(light, 1);
    light2Sphere.position.y = 200;
    light2Sphere.position.x = 200;
    light3Sphere.position.x = 7200;
    light3Sphere.position.y = 1000;
    light4Sphere.position.x = -1200;
    light4Sphere.position.y = -3200;
    light4Sphere.position.z = -5200;
    light5Sphere.position.x = -1200;
    light5Sphere.position.y = 300;
  sceneSphere.add(light2Sphere);
  sceneSphere.add(light3Sphere);
  sceneSphere.add(light4Sphere);
  sceneSphere.add(light5Sphere);

  //Geometry
  var sphere = new THREE.SphereGeometry( 80, 50, 50 );
  var sphere2 = new THREE.SphereGeometry( 80, 20, 20 );
  var sphere3 = new THREE.SphereGeometry( 80, 50, 50 );

  // Creating and adding shapes
  var sphere = new THREE.Mesh( sphere, materialWireframe ); //change sphere material here
  var sphere2 = new THREE.Mesh( sphere2, materialWireframe );
  var sphere3 = new THREE.Mesh( sphere3, materialWireframe );
  sphere.position.z = -600;
  sphere2.position.z = -400;
  sphere3.position.z = -600;
  // sceneSphere.add( sphere );
  sceneSphere.add( sphere2 );
  // sceneSphere.add( sphere3 );



  function sphereRender() {
    requestAnimationFrame( sphereRender );
    sphere.position.x = 160;
    sphere3.position.x = -160;
    // sphere.rotation.x += 0.007;
    sphere.rotation.y += 0.007;
    sphere2.rotation.y -= 0.007;
    sphere3.rotation.y += 0.007;
    sphereRenderer.render( sceneSphere, camera );
  }
  sphereRender();

}

//If myCubeCanvas exists render the sphere
if (myCubeCanvas) {
  var cubeRenderer,
  sceneCube;

  window.addEventListener("resize", function() {
    cubeRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });

  // cubeRenderer
  cubeRenderer = new THREE.WebGLRenderer({antialias: true});
  cubeRenderer.setSize( window.innerWidth, window.innerHeight);
  myCubeCanvas.appendChild( cubeRenderer.domElement );
  cubeRenderer.setClearColor(dark); //Background color of cube canvas
  cubeRenderer.setPixelRatio(window.devicePixelRatio);

  //Scene
  sceneCube = new THREE.Scene();

  // Lights
  var lightCube = new THREE.AmbientLight(0xffffff, 0.5);
  sceneCube.add(lightCube);
  var light2Cube = new THREE.PointLight(0xffffff, 0.5);
  sceneCube.add(light2Cube);

  //Geometry
  var cube = new THREE.CubeGeometry( 20, 20, 20, 20, 2, 2 );

  // Creating and adding shapes
  var cube = new THREE.Mesh( cube, materialWireframe ); //change cube material here
  cube.position.z = -100;
  sceneCube.add( cube );


  function cubeRender() {
    requestAnimationFrame( cubeRender );
    cube.rotation.x += 0.007;
    cube.rotation.y += 0.01;
    cubeRenderer.render( sceneCube, camera );
  }
  cubeRender();

}

//If myTorusCanvas exists render the Torus Knot
if (myTorusCanvas) {
  var torusRenderer,
  sceneTorus;

  window.addEventListener("resize", function() {
    torusRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });


  // window.onresize = function() {
  // }

  // torusRenderer
  torusRenderer = new THREE.WebGLRenderer({antialias: true});
  torusRenderer.setSize( window.innerWidth, window.innerHeight);
  myTorusCanvas.appendChild( torusRenderer.domElement );
  torusRenderer.setClearColor(dark); //Background color of canvas
  torusRenderer.setPixelRatio(window.devicePixelRatio);

  // Scene
  sceneTorus = new THREE.Scene();

  // Lights
  var lightTorus = new THREE.AmbientLight(0xffffff, 0.5);
  sceneTorus.add(lightTorus);
  var light2Torus = new THREE.PointLight(0xffffff, 0.5);
  sceneTorus.add(light2Torus);

  // Geometry
  var torusKnotGeometry = new THREE.TorusKnotGeometry( 70, 18, 10, 10 );

  // Creating and adding shapes
  var torusKnot = new THREE.Mesh( torusKnotGeometry, materialShiny ); //change torus material here
  torusKnot.position.z = -500;
  sceneTorus.add( torusKnot );

  function torusRender() {
    requestAnimationFrame( torusRender );
    torusKnot.rotation.x -= 0.007;
    torusKnot.rotation.y -= 0.01;
    // torusKnot.rotation.z -= 0.007;
    torusRenderer.render( sceneTorus, camera );
  }
  torusRender();
}
