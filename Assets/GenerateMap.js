#pragma strict

var size;
var totalSkyboxes;
var asteroidAmount = 250;
var planetAmount = 10;
var x : int;
var z : int;
var collides = false;
var asteroidTarget : Component;
var asteroidArrayX = new Array([3]);
var asteroidArrayZ = new Array([2]);
var a : int;
var b : int = 0;

function generateMap(){
	//add skyboxes, different asteroids
	//generate planets based on size variable
	//space stations and other stuff
	for (var i=0; i < asteroidAmount; i++){ 
		collides = false;
		x = Random.Range(-100, 100);
	 	z = Random.Range(-100, 100);
	 	for(a = 0; a <= asteroidArrayX.length - 1; a++){
	 		b = asteroidArrayX.length - 1;
	 		if(x == asteroidArrayX[b] && z == asteroidArrayZ[b]){//check if both equal x and y
	 			a = asteroidArrayX.length;
	 			collides = true;
	 		}
	 	}
		//[not yet]check if they are too close to planets
		if(collides == true){
			i = i - 1;
		}else{
			Instantiate(asteroidTarget, Vector3( x, 0, z), Quaternion.identity);
			//add x and z to arrays.
			asteroidArrayX.push(x);
			asteroidArrayZ.push(z);
		}
	}
}
function Start () {
	//set size to player's input
	generateMap();
}

function Update () {

}