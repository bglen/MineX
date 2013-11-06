#pragma strict

static var currentSpeed = 0;
static var nextSpeed = 0;
static var maxSpeed = 0;
static var currentAngle = 0;
static var nextAngle = 0;
var x = 0;
var y = 0;
var z = 0;

function Start () {

}

function Update () {
	if(transform.position.z == 120){
		transform.position.z = -170;
	}
	transform.position = Vector3(transform.position.x + x, transform.position.y + y, transform.position.z + z);
}