<?php
header('Content-Type: application/json');

if(!isset($_POST['team'])){
	$file = fopen('compteurs.txt', 'r');
	echo fgets($file);
	fclose($file);
}

else{
	$file = fopen('compteurs.txt', 'r');
	$scores = fgets($file);
	fclose($file);


	$scores = json_decode ($scores, true);
	$scores[$_POST['team']] += 1;
	$scores = json_encode($scores);

	$file = fopen('compteurs.txt', 'w+');
	fputs($file, $scores);

	fclose($file);
	echo '{"result": "ok"}';
}
?>