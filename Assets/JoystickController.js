#pragma strict
var startPosition : Vector2;
var currentPosition : Vector2;
var onCorrectSide = false;
var touchAmount = 0;

//implement later:
//fire button
//control schemes(left or right)

function Start () {

}

function Update () {

//rewrite for velocity and merge with player movement script
	for (var touch : Touch in Input.touches) {
		if(touch.fingerId == 1){//if first finger
			if (touch.phase == TouchPhase.Began) {//if touch began
			touchAmount++;
				if(touch.position.x < Screen.width){//if began inside the joystick
					onCorrectSide = true;
					startPosition = touch.position;
				}else{
					onCorrectSide = false;
				}
			}
			if(touch.phase == TouchPhase.Moved){
				if(onCorrectSide){
					currentPosition = touch.position;
					var relativePosition : Vector2;
					
					relativePosition = startPosition - currentPosition;
					
				}
													
				if((Vector2.Distance(currentPosition, startPosition) / 100) > 1){
					PlayerMovement.nextSpeed = PlayerMovement.maxSpeed;
				}else{
					PlayerMovement.nextSpeed = PlayerMovement.maxSpeed * Vector2.Distance(currentPosition, startPosition) / 100;
				}
			}
			if(touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled){
				PlayerMovement.nextSpeed = 0;
				onCorrectSide = false;
			}
		}
	}
}