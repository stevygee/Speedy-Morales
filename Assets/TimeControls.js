#pragma strict

public var slowTime : float = 0.5f;

public static var isSlow : boolean = false;

function Start () {

}

function Update ()
{
	// Speed
	if(Input.GetKeyDown(KeyCode.Space))
	{
		isSlow = !isSlow;
		if(isSlow)
		{
			Time.timeScale = slowTime;
			GameObject.FindGameObjectWithTag("Player").renderer.material.color = Color.red;
		}
		else
		{
			Time.timeScale = 1.0;
			GameObject.FindGameObjectWithTag("Player").renderer.material.color = Color.white;
		}
		
		// Adjust fixed delta time according to timescale
		// The fixed delta time will now be 0.02 frames per real-time second
		Time.fixedDeltaTime = 0.02 * Time.timeScale;
	}
}