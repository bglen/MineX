#pragma strict

var position;

function Start () {

}

function Update () {
	
	position = transform.position.z + 1;
	transform.Translate(Vector3(0, position, 0));
}