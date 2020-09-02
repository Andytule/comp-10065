<?php
/*
Andy Le
000805099
PHP file that gets table from database
I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
*/
include "connect.php";
include "student.php";

$command = "SELECT id, fullName, grade FROM students ORDER BY fullName";
$stmt = $dbh->prepare($command);
$success = $stmt->execute();
$studentlist = [];
if ($success) {
	while ($row = $stmt->fetch()) {
		$astudent = [
				"id"=>$row["id"],
				"fullname"=>$row["fullName"],
				"grade"=>$row["grade"]
			];
		array_push($studentlist, $astudent);
	}
} else {
	echo "<p>Fail…</p>";
}

echo json_encode($studentlist);
?>

