<!--
* Andy Le
* 000805099
* Implementation of user menu
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
-->
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/code.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
</head>

<body>
	<header>
		<h1>Clinic Appointment Form</h1>
	</header>
    <?php
    $valid = true;

    $f1 = filter_input(INPUT_GET, "fname1", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$f1) {
    	echo "<p>Appointment 1 first name empty!</p>";
    	$valid = false;
    }

	$l1 = filter_input(INPUT_GET, "lname1", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$l1) {
    	echo "<p>Appointment 1 last name empty!</p>";
    	$valid = false;
    }

	$i1 = filter_input(INPUT_GET, "id1", FILTER_VALIDATE_INT);
	if (!$i1 or $i1 === null) {
    	echo "<p>Appointment 1 Id invalid input!</p>";
    	$valid = false;
    }

	$d1 = filter_input(INPUT_GET, "date1", FILTER_SANITIZE_STRING);
    if (!$d1) {
    	echo "<p>Appointment 1 date is empty!</p>";
    	$valid = false;
    }

	$h1 = filter_input(INPUT_GET, "hour1", FILTER_SANITIZE_SPECIAL_CHARS);

	$r1 = filter_input(INPUT_GET, "reason1", FILTER_SANITIZE_SPECIAL_CHARS);
	if (!$r1) {
		echo "<p>Appointment 1 reason is empty!</p>";
		$valid = false;
	}

	$f2 = filter_input(INPUT_GET, "fname2", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$f2) {
    	echo "<p>Appointment 2 first name empty!</p>";
    	$valid = false;
    }

	$l2 = filter_input(INPUT_GET, "lname2", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$l2) {
    	echo "<p>Appointment 2 last name empty!</p>";
    	$valid = false;
    }

	$i2 = filter_input(INPUT_GET, "id2", FILTER_VALIDATE_INT);
	if (!$i2 or $i2 === null) {
    	echo "<p>Appointment 2 Id invalid input!</p>";
    	$valid = false;
    }

	$d2 = filter_input(INPUT_GET, "date2", FILTER_SANITIZE_STRING);
    if (!$d2) {
    	echo "<p>Appointment 2 date is empty!</p>";
    	$valid = false;
    }

	$h2 = filter_input(INPUT_GET, "hour2", FILTER_SANITIZE_SPECIAL_CHARS);

	$r2 = filter_input(INPUT_GET, "reason2", FILTER_SANITIZE_SPECIAL_CHARS);
	if (!$r2) {
		echo "<p>Appointment 2 reason is empty!</p>";
		$valid = false;
	}

	$f3 = filter_input(INPUT_GET, "fname3", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$f3) {
    	echo "<p>Appointment 3 first name empty!</p>";
    	$valid = false;
    }

	$l3 = filter_input(INPUT_GET, "lname3", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$l3) {
    	echo "<p>Appointment 3 last name empty!</p>";
    	$valid = false;
    }

	$i3 = filter_input(INPUT_GET, "id3", FILTER_VALIDATE_INT);
	if (!$i3 or $i3 === null) {
    	echo "<p>Appointment 3 Id invalid input!</p>";
    	$valid = false;
    }

	$d3 = filter_input(INPUT_GET, "date3", FILTER_SANITIZE_STRING);
    if (!$d3) {
    	echo "<p>Appointment 3 date is empty!</p>";
    	$valid = false;
    }

	$h3 = filter_input(INPUT_GET, "hour3", FILTER_SANITIZE_SPECIAL_CHARS);

	$r3 = filter_input(INPUT_GET, "reason3", FILTER_SANITIZE_SPECIAL_CHARS);
	if (!$r3) {
		echo "<p>Appointment 3 reason is empty!</p>";
		$valid = false;
	}

	$f4 = filter_input(INPUT_GET, "fname4", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$f4) {
    	echo "<p>Appointment 4 first name empty!</p>";
    	$valid = false;
    }

	$l4 = filter_input(INPUT_GET, "lname4", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$l4) {
    	echo "<p>Appointment 4 last name empty!</p>";
    	$valid = false;
    }

	$i4 = filter_input(INPUT_GET, "id4", FILTER_VALIDATE_INT);
	if (!$i4 or $i4 === null) {
    	echo "<p>Appointment 4 Id invalid input!</p>";
    	$valid = false;
    }

	$d4 = filter_input(INPUT_GET, "date4", FILTER_SANITIZE_STRING);
    if (!$d4) {
    	echo "<p>Appointment 4 date is empty!</p>";
    	$valid = false;
    }

	$h4 = filter_input(INPUT_GET, "hour4", FILTER_SANITIZE_SPECIAL_CHARS);

	$r4 = filter_input(INPUT_GET, "reason4", FILTER_SANITIZE_SPECIAL_CHARS);
	if (!$r4) {
		echo "<p>Appointment 4 reason is empty!</p>";
		$valid = false;
	}

    class Appointment {
    	private $first;
    	private $last;
    	private $id;
    	private $date;
    	private $hour;
    	private $reason;

    	public function __construct($first, $last, $id, $date, $hour, $reason) {
    		$this->first = $first; 
    		$this->last = $last;
    		$this->id = $id;
    		$this->date = $date;
    		$this->hour = $hour;
    		$this->reason =$reason;
    	}

    	public function get_first() {
    		return $this->first;
    	}
    	public function get_last() {
    		return $this->last;
    	}
    	public function get_id() {
    		return $this->id;
    	}
    	public function get_date() {
    		return $this->date;
    	}
    	public function get_hour() {
    		return $this->hour;
    	}
    	public function get_reason() {
    		return $this->reason;
    	}

    	public function to_string() {
    		return "<p>First name: {$this->first}</p>
    				<p>Last name: {$this->last}</p>
    				<p>Id: {$this->id}</p>
    				<p>Date: {$this->date}</p>
    				<p>Hour: {$this->hour}</p>
    				<p>Reason: {$this->reason}</p>";
    	}
    }

    $a1 = new Appointment($f1, $l1, $i1, $d1, $h1, $r1);
    $a2 = new Appointment($f2, $l2, $i2, $d2, $h2, $r2);
    $a3 = new Appointment($f3, $l3, $i3, $d3, $h3, $r3);
    $a4 = new Appointment($f4, $l4, $i4, $d4, $h4, $r4);
    $apparray = [$a1, $a2, $a3, $a4];

    for ($i = 0; $i < count($apparray); $i++) {
    	for ($j = $i + 1; $j < count($apparray); $j++) {
    		if (($apparray[$i]->get_first() === $apparray[$j]->get_first()) and ($apparray[$i]->get_last() === $apparray[$j]->get_last())) {
    			echo "<p>Appointment " . ($i + 1) .  " and appointment " . ($j + 1) . " have the same names!</p>";
    			$valid = false;
    		}
    		if ($apparray[$i]->get_id() === $apparray[$j]->get_id()) {
    			echo "<p>Appointment " . ($i + 1) .  " and appointment " . ($j + 1) . " have the same Id!</p>";
    			$valid = false;
    		}
    		if (($apparray[$i]->get_date() === $apparray[$j]->get_date()) and ($apparray[$i]->get_hour() === $apparray[$j]->get_hour())) {
    			echo "<p>Appointment " . ($i + 1) .  " and appointment " . ($j + 1) . " are booked for the same hour!</p>";
    			$valid = false;
    		}
    	}    
    }
    
    if ($valid) {
    	echo "<table>";
    	echo "<tr><th>No</th><th>Name</th><th>Id</th><th>Date</th><th>Hour</th><th>Reason</th></tr>";
    	for ($k = 0; $k < count($apparray); $k++) {
    		echo "<tr>";
    		echo "<td>$k</td>";
    		echo "<td>{$apparray[$k]->get_first()} {$apparray[$k]->get_last()}</td>";
    		echo "<td>{$apparray[$k]->get_id()}</td>";
    		echo "<td>{$apparray[$k]->get_date()}</td>";
    		echo "<td>{$apparray[$k]->get_hour()}</td>";
    		echo "<td>{$apparray[$k]->get_reason()}</td>";
    		echo "</tr>";
    	}
    	echo "</table>";
    }
    ?>
</body>

</html>