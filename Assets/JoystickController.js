#pragma strict
//attach to joystich gui element
//todo next:
//change rotation of player ship
//
//draw joystick dot:
//
//if beganInJoystick
//	if touch position is in joystick{
//		draw joystick dot at touch position
//	}else{
//		draw joystick at same slope as position but at edge of joystick
//	}
//}
//if ended/cancelled{
//	do not draw dot
//}

var joystickRadius = 20;//radius of joystick circle on screen in pixels
var outsideRadius = false;
var beganInJoystick = false;
var joystickOrigin : Vector2;

function Start () {

}

function Update () {
	for (var touch : Touch in Input.touches) {
		if(touch.fingerId == 1){//if first finger
			if (touch.phase == TouchPhase.Began) {//if touch began
				if(Vector2.Distance(touch.position, joystickOrigin) < joystickRadius){//if began inside the joystick
					beganInJoystick = true;
					//fix this
					PlayerMovement.nextSpeed = PlayerMovement.maxSpeed * Vector2.Distance(touch.position, joystickOrigin)/joystickRadius;
				}else{
					beganInJoystick = false;
				}
			}
			if(touch.phase == TouchPhase.Moved){
				if(beganInJoystick == true){
					if(Vector2.Distance(touch.position, joystickOrigin) >= joystickRadius){
						PlayerMovement.nextSpeed = PlayerMovement.maxSpeed;
					}else{
						//fix this
						PlayerMovement.nextSpeed = PlayerMovement.maxSpeed * Vector2.Distance(touch.position, joystickOrigin)/joystickRadius;
					}
				}
			}
			if(touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled){
				PlayerMovement.nextSpeed = 0;
				beganInJoystick = false;
			}
		}
	}
}