#pragma strict

public var moveSpeed : float = 10f;
public var strafeSpeed : float = 5f;
public var turnSpeed : float = 50f;

function Start () {

}

function Update ()
{
	// Move Player in realtime
	var myDeltaTime = Time.timeScale == 0 ? 0 : Time.deltaTime / Time.timeScale;

	// Speed
    if(Input.GetKey(KeyCode.W))
        transform.Translate(Vector3.forward * moveSpeed * myDeltaTime);
    
    if(Input.GetKey(KeyCode.S))
        transform.Translate(-Vector3.forward * moveSpeed * myDeltaTime);
    
    // Strafe
    if(Input.GetKey(KeyCode.A))
        transform.Translate(Vector3.left * strafeSpeed * myDeltaTime);
    
    if(Input.GetKey(KeyCode.D))
        transform.Translate(Vector3.right * strafeSpeed * myDeltaTime);
    
    // Turn
    /*if(Input.GetKey(KeyCode.Q))
        transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.E))
        transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
        
	if(Input.GetKey(KeyCode.W))
        transform.Rotate(Vector3.left, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.S))
        transform.Rotate(Vector3.left, turnSpeed * Time.deltaTime);*/
}