 <?php
    header("Access-Control-Allow-Origin: *");
    $numberOfUsersOnList = 5;

    $highscores = array();
    $link = mysqli_connect("shareddb1d.hosting.stackcp.net", "ForAngular2-3231d7e5", "aoT1i6cuHVRS","ForAngular2-3231d7e5");

    if(mysqli_connect_error()) {
        die ("Database Connection Error");
    }

    $query = "SELECT * FROM Players ORDER BY score DESC LIMIT ".$numberOfUsersOnList; 
   
    $result = mysqli_query($link, $query);

    for($i = 0; $i < mysqli_num_rows($result); $i++) {
       $highscores[$i] = mysqli_fetch_array($result);
    }

    $scoreLimit = $highscores[$numberOfUsersOnList]["score"];

    #$query = "DELETE FROM users WHERE score < ".$scoreLimit;

    #mysqli_query($link, $query);

    echo(json_encode($highscores));


?>