<?php
/*
Andy Le
000805099
PHP file for student class
I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
*/
class Student implements JsonSerializable
{
	private $id;
	private $fullname;
	private $grade;

	function __construct($id, $fullname, $grade)
	{
		$this->id = $id;
		$this->fullname = $fullname;
		$this->grade = (int)$grade; 
	}

	public function jsonSerialize()
    {
        return  get_object_vars($this);
    }
}

?>