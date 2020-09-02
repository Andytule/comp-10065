<!--
* Andy Le
* 000805099
* Implementation of wumpus game
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
-->
<?php
include "connect.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/wumpus.css">
    <link rel="stylesheet" type="text/css" href="css/save.css">
</head>
<body>
	<h1>Hunt the Wumpus!</h1>
    <?php
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    $state = filter_input(INPUT_POST, "state", FILTER_VALIDATE_INT);
    if (!$email or $email === null) {
    	echo "<p>Invalid email input!</p>";
    } else {
    	$command = "SELECT Email FROM players WHERE Email=?";
    	$stmt = $dbh->prepare($command);
    	$success = $stmt->execute([$email]);
    	if ($success) {
    		if ($row = $stmt->fetch()) {
    			if ($state === 1) {
    				$command = "UPDATE players SET Wins=Wins+1 WHERE Email=?";
    				$stmt = $dbh->prepare($command);
    				$success = $stmt->execute([$email]);
    				if ($success) {
    					echo "<p>Added win to {$email}</p>";
    				} else {
    					echo "<p>Fail…</p>";
    				}
    			} else {
    				$command = "UPDATE players SET Loss=Loss+1 WHERE Email=?";
    				$stmt = $dbh->prepare($command);
    				$success = $stmt->execute([$email]);
    				if ($success) {
    					echo "<p>Added loss to {$email}</p>";
    				} else {
    					echo "<p>Fail…</p>";
    				}
    			}
    		} else {
    			if ($state === 1) {
    				$command = "INSERT into players VALUES (?, ?, ?, ?)";
    				$stmt = $dbh->prepare($command);
    				$params = [$email, 1, 0, date("Y-m-d")];
    				$success = $stmt->execute($params);
    				if ($success) {
    					echo "<p>Added {$email} to database with a win</p>";
    				} else {
    					echo "<p>Fail…</p>";
    				}
    			} else {
    				$command = "INSERT into players VALUES (?, ?, ?, ?)";
    				$stmt = $dbh->prepare($command);
    				$params = [$email, 0, 1, date("Y-m-d")];
    				$success = $stmt->execute($params);
    				if ($success) {
    					echo "<p>Added {$email} to database with a loss</p>";
    				} else {
    					echo "<p>Fail…</p>";
    				}
    			}
    		}
    	} else {
			echo "<p>Fail…</p>";
		}
		$command = "SELECT Email, Wins, Loss, Played FROM players WHERE Email=?";
		$stmt = $dbh->prepare($command);
		$success = $stmt->execute([$email]);
		$me = $stmt->fetch();
		echo "<table>";
		echo "<tr><td>$me[Email]</td><td>$me[Wins]</td><td>$me[Loss]</td><td>$me[Played]</td></tr>";
		echo "</table>";
		echo "<h2>Top 10 players</h2>";
		echo "<table>";
		echo "<tr><th>Email</th><th>Wins</th><th>Loss</th><th>Date</th></tr>";
		$command = "SELECT Email, Wins, Loss, Played FROM players ORDER BY Wins DESC";
		$stmt = $dbh->prepare($command);
		$success = $stmt->execute();
		$playerlist = [];
		if ($success) {
			while($row = $stmt->fetch()) {
				echo "<tr><td>$row[Email]</td><td>$row[Wins]</td><td>$row[Loss]</td><td>$row[Played]</td></tr>";
			}
		} else {
			echo "<p>Fail…</p>";
		}
		echo "</table>";
		echo '<a href="index.php">Play Again</a>';
    }
    ?>
</body>

</html>