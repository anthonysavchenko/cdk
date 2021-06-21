<?php

$to = 'anthony.savchenko@gmail.com';
$subject = 'Subject';
$message = 'Hello';
$headers =
    'From: anthony.savchenko@gmail.com' . "\r\n" .
    'Reply-To: anthony.savchenko@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
