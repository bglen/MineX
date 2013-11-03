#pragma strict
//detect if touch
// get a vector2 from origin of joystick and where touch is
//check if touch BEGAN within boundaries(if vector2.magnitude <= radius of joystick circle)
//if true,
//speed of ship is vector2.magnituide(as percent of total speed) and
//
//
//
//

var Joystick : Component;//the joystick on the screen
var JoystickTarget : Component;//the player ship
var outsideRadius = false;

function Start () {

}

function Update () {
	for (var touch : Touch in Input.touches) {
		if(touch.fingerId == 1){//if first finger
			if (touch.phase == TouchPhase.Began) {//if touch began
				if(Vector2.Distance(touch.position, Joystick.transform.position <= JoystickTarget.radius)){//if began inside the joystick
					outsideRadius = true;
				}
			}
			if(touch.phase == TouchPhase.Moved){
			
			
			}
			if(touch.phase == TouchPhase.Ended){
			
			
			}
		}
	}
	if(outsideRadius = True){
		JoystickTarget.currentSpeed = JoystickTarget.maxSpeed
	}else{
		JoystickTarget.currentSpeed = JoystickTarget.maxSpeed * Vector2.Distance(touch.position, Joystick.transform.position/JoystickTarget.radius
	}
}