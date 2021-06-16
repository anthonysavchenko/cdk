<?php
    $file_color = base64_decode(file_get_contents('../config/colors.tx', FILE_USE_INCLUDE_PATH));
    echo $file_color;
?>