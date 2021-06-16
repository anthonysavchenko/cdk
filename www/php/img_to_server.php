<?php 
    $id_klient = $_POST['id_klient'];
    $img_to_server = $_POST['img_to_server'];
   
    $imageName = '../tmp_files/'.$id_klient.'screen.jpg';
    if (file_exists($imageName)) {
        unlink($imageName);
    }

    $imageData = base64_decode($img_to_server);
    $source = imagecreatefromstring($imageData);
    $rotate = imagerotate($source, $angle, 0);
    $imageSave = imagejpeg($rotate,$imageName,100);
    imagedestroy($source);
?>