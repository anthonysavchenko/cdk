<?php 
    $dir_ff = $_POST['text_up2'];
    $dir = '../tmp_files/';

    function resize_crop_image($max_width, $max_height, $source_file, $dst_dir, $quality = 80){
        $imgsize = getimagesize($source_file);
        $width = $imgsize[0];
        $height = $imgsize[1];
        $mime = $imgsize['mime'];
     
        switch($mime){
            case 'image/gif':
                $image_create = "imagecreatefromgif";
                $image = "imagegif";
                break;
     
            case 'image/png':
                $image_create = "imagecreatefrompng";
                $image = "imagepng";
                $quality = 7;
                break;
     
            case 'image/jpeg':
                $image_create = "imagecreatefromjpeg";
                $image = "imagejpeg";
                $quality = 80;
                break;
     
            default:
                return false;
                break;
        }
         
        $dst_img = imagecreatetruecolor($max_width, $max_height);
        $src_img = $image_create($source_file);
         
        $width_new = $height * $max_width / $max_height;
        $height_new = $width * $max_height / $max_width;
        //if the new width is greater than the actual width of the image, then the height is too large and the rest cut off, or vice versa
        if($width_new > $width){
            //cut point by height
            $h_point = (($height - $height_new) / 2);
            //copy image
            imagecopyresampled($dst_img, $src_img, 0, 0, 0, $h_point, $max_width, $max_height, $width, $height_new);
        }else{
            //cut point by width
            $w_point = (($width - $width_new) / 2);
            imagecopyresampled($dst_img, $src_img, 0, 0, $w_point, 0, $max_width, $max_height, $width_new, $height);
        }
         
        $image($dst_img, $dst_dir, $quality);
     
        if($dst_img)imagedestroy($dst_img);
        if($src_img)imagedestroy($src_img);
    }

  
        $path = $_FILES['potolok_img']['name'];
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        // $filename = md5(microtime() . rand(0, 9999));
        $filename = $dir_ff.'potolok';
        $filename_send = $filename.'.'.$ext;
        $uploadedFile =  '../tmp_files/'.$filename .'.'.$ext;

        if (file_exists($uploadedFile)) {
            unlink($uploadedFile);
        }

        move_uploaded_file($_FILES["potolok_img"]["tmp_name"],$uploadedFile);
        resize_crop_image(900, 300, $uploadedFile, $uploadedFile);




    $res = '<script type="text/javascript">';
    $res .= "window.parent.potolok_set_from_image('$filename_send');";
    $res .= "</script>";
    echo $res;
?>