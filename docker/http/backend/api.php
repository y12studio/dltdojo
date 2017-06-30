<?php
/*
url, username, passwd,
*/
$connection = new PDO('mysql:host=db;dbname=mydb','root','root');
$statement = $connection->query('select * from mytable');
$return = [];
foreach ($statement as $row) {
    $return[] = [ 
        'name' => $row['name'],
        'balance' => $row['balance']
    ];
}
header('Content-type: application/json');
echo json_encode($return);
?>