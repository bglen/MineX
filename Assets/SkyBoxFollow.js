#pragma strict

var CameraTarget : Component;

function Start () {

}

function Update () {
	 transform.position = CameraTarget.transform.position;
	 transform.rotation = Quaternion(0, 180, 180, 0);
}