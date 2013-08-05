// Credit to damien_oconnell from http://forum.unity3d.com/threads/39513-Click-drag-camera-movement
// for using the mouse displacement for calculating the amount of camera movement and panning code.

using UnityEngine;
using System.Collections;

public class MouseControls : MonoBehaviour {
  
	public float turnSpeed;		// Speed of camera turning when mouse moves in along an axis
	
	private Vector3 dragOrigin;	// Position of cursor when drag starts
	private bool isRotating;	// Is the camera being rotated?
	
	void Update ()
	{
		// Get the left mouse button
		if(Input.GetMouseButtonDown(0))
		{
			// Get drag origin
			dragOrigin = Input.mousePosition;
			isRotating = true;
		}
		
		// Disable movements on button release
		if (!Input.GetMouseButton(0)) isRotating = false;
		
		// Rotate camera along X and Y axis
		if (isRotating)
		{
	        Vector3 pos = Camera.main.ScreenToViewportPoint(Input.mousePosition - dragOrigin);

			transform.RotateAround(transform.position, transform.right, -pos.y * turnSpeed);
			transform.RotateAround(transform.position, Vector3.up, pos.x * turnSpeed);
		}
	}
}