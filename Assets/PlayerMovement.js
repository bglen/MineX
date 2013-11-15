#pragma strict

//merge touch movement into this script
//rewrite on velocity basis

static var currentSpeed = 0;
static var nextSpeed = 0;
static var maxSpeed = 5;
static var velocity = 0;
static var velocityX;
static var velocityY;
static var slope : double;
var speed = 4.0;


function Start () {

}

function FixedUpdate () {
	//sets the ship to look at the direction of the mouse


    var playerPlane = new Plane(Vector3.right, transform.position);
 
    // Generate a ray from the cursor position
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
 
    // Determine the point where the cursor ray intersects the plane.
    // This will be the point that the object must look towards to be looking at the mouse.
    // Raycasting to a Plane object only gives us a distance, so we'll have to take the distance,
    //   then find the point along that ray that meets that distance.  This will be the point
    //   to look at.
    var hitdist = 0.0;
    // If the ray is parallel to the plane, Raycast will return false.
    if (playerPlane.Raycast (ray, hitdist)) {
        // Get the point along the ray that hits the calculated distance.
        var targetPoint = ray.GetPoint(hitdist);
 
        // Determine the target rotation.  This is the rotation if the transform looks at the target point.
        var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
 
        // Smoothly rotate towards the target point.
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, speed * Time.deltaTime);
    }
    
    
	//set the angle of the ship given the slope
}