using UnityEngine;
 
public class CameraFollow : MonoBehaviour{
    public Transform target;
 
    public float height = 20f;
    public float distance = 20f;
 
    public float min = 10f;
    public float max = 60;
 
    public float rotateSpeed = 1f;
 
    public bool doRotate;
    public bool doZoom;
	
    public float zoomStep = 30f;
    public float zoomSpeed = 5f;
    private float heightWanted;
    private float distanceWanted;
 
    private Vector3 zoomResult;
    private Quaternion rotationResult;
    private Vector3 targetAdjustedPosition;
 
    void Start(){
        // Initialise default zoom vals.
        heightWanted = height;
        distanceWanted = distance;
        zoomResult = new Vector3(0f, height, -distance);
    }
 
    void LateUpdate(){
        if( !target ){
            Debug.LogError("This camera has no target, you need to assign a target in the inspector.");
            return;
        }
 
        if( doZoom ){
            float mouseInput = Input.GetAxis("Mouse ScrollWheel");
            heightWanted -= zoomStep * mouseInput;
            distanceWanted -= zoomStep * mouseInput;
 
            // Make sure they meet our min/max values.
            heightWanted = Mathf.Clamp(heightWanted, min, max);
            distanceWanted = Mathf.Clamp(distanceWanted, min, max);
 
            height = Mathf.Lerp(height, heightWanted, Time.deltaTime * zoomSpeed);
            distance = Mathf.Lerp(distance, distanceWanted, Time.deltaTime * zoomSpeed);
 
            // Post our result.
            zoomResult = new Vector3(0f, height, -distance);
        }
 
        if( doRotate ){
            float currentRotationAngle = transform.eulerAngles.y;
            float wantedRotationAngle = target.eulerAngles.y;
 
            currentRotationAngle = Mathf.LerpAngle(currentRotationAngle, wantedRotationAngle, rotateSpeed * Time.deltaTime);
            rotationResult = Quaternion.Euler(0f, currentRotationAngle, 0f);
        }

        targetAdjustedPosition = rotationResult * zoomResult;
        transform.position = target.position + targetAdjustedPosition;
		
        transform.LookAt(target);
    }
}