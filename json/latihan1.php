<?php

// $mahasiswa = [
// 		[
// 		"nama" => "Yolantika Nur",
// 		"nrp" => 645645654654,
// 		"email" => "yolantikan34@gmail.com",
// 		],
// 		[
// 		"nama" => "Yolantika Nur",
// 		"nrp" => 645645654654,
// 		"email" => "yolantikan34@gmail.com",
// 		]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=db_karyawan', 'root', '');
$db = $dbh->prepare('SELECT * FROM karyawan');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC); //kembaliannya arrot asosiatif

$data = json_encode($mahasiswa);
echo $data;


?>