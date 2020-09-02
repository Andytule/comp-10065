<!--
* Andy Le
* 000805099
* Implementation of wumpus game
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
-->
<?php
/**
 * Include this to connect. Change the dbname to match your database,
 * and make sure your login information is correct after you upload 
 * to csunix or your app will stop working.
 * 
 * Sam Scott, Mohawk College, 2019
 */
try {
    $dbh = new PDO(
        "mysql:host=csunix.mohawkcollege.ca;dbname=000805099",
        "000805099",
        "19991222"
    );
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}
