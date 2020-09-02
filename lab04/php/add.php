<?php
/*
Andy Le
000805099
PHP file that receives POST parameters for a new student
I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
*/

include "connect.php";
include "student.php";

$fullname = filter_input(INPUT_POST, "fullname", FILTER_SANITIZE_SPECIAL_CHARS);
$grade = filter_input(INPUT_POST, "grade", FILTER_VALIDATE_INT);

$valid = true;
if (!$fullname) {
	$valid = false;
}

if (!$grade or $grade === null) {
	$valid = false;
}


if ($valid) {
	$command = "INSERT into students (fullName, grade) VALUES (?, ?)";
	$stmt = $dbh->prepare($command);
	$params = [$fullname, $grade];
	$success = $stmt->execute($params);
	if ($success) {
		echo "<p>Added {$fullname} to student database</p>";
	} else {
		echo "<p>Fail…</p>";
	}
} else {
	echo "Invalid input....";
}
?>