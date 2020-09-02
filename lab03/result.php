<!--
* Andy Le
* 000805099
* Implementation of wumpus game
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
-->
<?php
include "connect.php";
$r = filter_input(INPUT_GET, "row", FILTER_VALIDATE_INT);
$c = filter_input(INPUT_GET, "col", FILTER_VALIDATE_INT);
$success = false;
if ($r !== null && $c !== null) {
	$command = "SELECT R, C FROM wumpuses WHERE R=? AND C=? ORDER BY ID";
	$stmt = $dbh->prepare($command);
    $params = [$r, $c];
    $success = $stmt->execute($params);
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/wumpus.css">
    <link rel="stylesheet" type="text/css" href="css/result.css">
</head>
<body>
    <h1>Hunt the Wumpus!</h1>
    <div id="containerR">
        <div id="top">
            <?php
            $state = 0;
            if ($success) {
                if($row = $stmt->fetch()) {
                    $state = 1;
                    echo "<p>You Win!</p>";
                    echo '<img src="images/win.jpg" alt="icon">';
                } else {
                    echo "<p>You Lose!</p>";
                    echo '<img src="images/lose.jpg" alt="icon">';
                }
            ?>
            <form action="save.php" method="post">
                <input type="hidden" name="state" value="<?=$state?>">
                <label for="email">First Name:</label>
                <input type="email" id="email" placeholder="example@gmail.com" name="email">
                <input type="submit" id="submit" name="submit">
            </form>
            <?php
            } else {
                echo "<p>Fail…</p>";
            }
            ?>
        </div>
    </div>
</body>

</html>