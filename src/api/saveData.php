<?php 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $newPts =$request->score
    $newUser = $request->nickname;;

    $link = mysqli_connect("shareddb1d.hosting.stackcp.net", "ForAngular2-3231d7e5", "aoT1i6cuHVRS","ForAngular2-3231d7e5");

        if(mysqli_connect_error()) {
            die ("Database Connection Error");
        }

    $query = "INSERT INTO Players (nickname, score) VALUES ('".  mysqli_real_escape_string($link, $newUser)."', ".mysqli_real_escape_string($link, $newPts).")";
    echo $query;
   if(mysqli_query($link, $query)) {
           echo "succes";
       } else {
           echo "fail";
       }
   
?>