#pragma strict

var CameraTarget : Component;

function Start () {

}

function Update () {
	 transform.position = Vector3(CameraTarget.transform.position.x, CameraTarget.transform.position.y ,20);
}