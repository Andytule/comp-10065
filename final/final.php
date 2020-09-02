<!DOCTYPE html>
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/
jquery.min.js"></script>
</head>

<body>
    <?php
    	session_start();
    	$_SESSION["drivername"] = $driverName;
		$_SESSION["age"] = $age;
		$_SESSION["email"] = $email;
        echo "<p>Hello {$drivername}</p>";

        if (isset($_SESSION["minimumAge"])) {
            if ($_SESSION["minimumAge"] <= $_SESSION["age"]) {
                echo "<p>You can drive!</p>";
            } else {
                echo "<p>Try again, later!</p>";
            }
        } else {
            echo "<p>Try again, later!</p>";
        }
    ?>

	
</body>

</html>