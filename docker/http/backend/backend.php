<!DOCTYPE html>
<html>
<head>
<title>BACKEND</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>BACKEND</h1>
<?php
/*
url, username, passwd,
*/
$connection = new PDO('mysql:host=db;dbname=mydb','root','root');
$statement = $connection->query('select * from mytable');

foreach($statement as $row){
    echo $row['name']." ".$row['balance']."<br>";
}
?>
</body>
</html>