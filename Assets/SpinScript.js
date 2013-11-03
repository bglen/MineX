#pragma strict
//scrip to rotate planets and suns, or other entities

@Range(-100, 100)//atribute to give speed a range.
public var speed : int = 0;

function Update () 
{
    transform.Rotate(new Vector3(0, speed * Time.deltaTime, 0));
}