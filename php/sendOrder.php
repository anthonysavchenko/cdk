<?php

require './sendEmail.php';

$config = require_once './config.php';

if (array_key_exists('clientName', $_POST)) {
    $clientName = substr(strip_tags($_POST['clientName']), 0, 255);
} else {
    echo('Произошла ошибка при отправке эскиза. Не указано имя клиента.');
    return;
}

if (array_key_exists('clientPhone', $_POST)) {
    $clientPhone = substr(strip_tags($_POST['clientPhone']), 0, 18);
} else {
    echo('Произошла ошибка при отправке эскиза. Не указан номер телефона.');
    return;
}

if (array_key_exists('clientEmail', $_POST) && isEmail($_POST['clientEmail'])) {
    $clientEmail = $_POST['clientEmail'];
} else {
    echo('Произошла ошибка при отправке эскиза. Неправильно указан адрес электронной почты.');
    return;
}

if (array_key_exists('attachment', $_POST)) {
    $attachment = $_POST['attachment'];
    $attachment = base64_decode($attachment);
    $attachment = imagecreatefromstring($attachment);
    
    $attachmentPath = '../tmp_files/' . date('Y-m-d-H-i-s-') . 'screenshot.jpg';
    if (file_exists($attachmentPath)) {
        unlink($attachmentPath);
    }

    imagejpeg($attachment, $attachmentPath, 100);
    imagedestroy($attachment);
} else {
    echo('Произошла ошибка при отправке эскиза. Не указано изображение.');
    return;
}

$comment = array_key_exists('comment', $_POST) ? $_POST['comment'] : '';

$ceilingLength = array_key_exists('ceilingLength', $_POST) ? $_POST['ceilingLength'] : 0;
$ceilingWidth = array_key_exists('ceilingWidth', $_POST) ? $_POST['ceilingWidth'] : 0;
$corners = array_key_exists('corners', $_POST) ? $_POST['corners'] : 0;
$primaryLight = array_key_exists('primaryLight', $_POST) ? $_POST['primaryLight'] : 0;
$secondaryLights = array_key_exists('secondaryLights', $_POST) ? $_POST['secondaryLights'] : 0;
$tubes = array_key_exists('tubes', $_POST) ? $_POST['tubes'] : 0;

$ownerEmailHtmlBody = getEmailBody(
    $clientName,
    $clientPhone,
    $clientEmail,
    $ceilingLength,
    $ceilingWidth,
    $corners,
    $primaryLight,
    $secondaryLights,
    $tubes,
    $comment,
    $config['ownerEmail']['htmlBody'],
    $config['ownerEmail']['commentHtmlBody'],
    $config['ownerEmail']['additionalHtmlBody']
);

$ownerEmailTextBody = getEmailBody(
    $clientName,
    $clientPhone,
    $clientEmail,
    $ceilingLength,
    $ceilingWidth,
    $corners,
    $primaryLight,
    $secondaryLights,
    $tubes,
    $comment,
    $config['ownerEmail']['textBody'],
    $config['ownerEmail']['commentTextBody'],
    $config['ownerEmail']['additionalTextBody']
);

if (sendEmail(
    $config['smtp']['host'],
    $config['smtp']['port'],
    $config['smtp']['login'],
    $config['smtp']['password'],
    $config['smtp']['fromFriendlyName'],
    $config['ownerEmail']['email'],
    $config['ownerEmail']['subject'],
    $ownerEmailHtmlBody,
    $ownerEmailTextBody,
    $attachmentPath
)) {
    echo(
        'Произошла ошибка при отправке эскиза в "Белый потолок".
            Пожалуйста, сообщите нам об этом.'
    );
    return;
}

$clientEmailHtmlBody = getEmailBody(
    $clientName,
    $clientPhone,
    $clientEmail,
    $ceilingLength,
    $ceilingWidth,
    $corners,
    $primaryLight,
    $secondaryLights,
    $tubes,
    $comment,
    $config['clientEmail']['htmlBody'],
    '',
    $config['clientEmail']['additionalHtmlBody']
);

$clientEmailTextBody = getEmailBody(
    $clientName,
    $clientPhone,
    $clientEmail,
    $ceilingLength,
    $ceilingWidth,
    $corners,
    $primaryLight,
    $secondaryLights,
    $tubes,
    $comment,
    $config['clientEmail']['textBody'],
    '',
    $config['clientEmail']['additionalTextBody']
);

if (sendEmail(
    $config['smtp']['host'],
    $config['smtp']['port'],
    $config['smtp']['login'],
    $config['smtp']['password'],
    $config['smtp']['fromFriendlyName'],
    $clientEmail,
    $config['clientEmail']['subject'],
    $clientEmailHtmlBody,
    $clientEmailTextBody,
    $attachmentPath
)) {
    echo(
        'Произошла ошибка при отправке эскиза на указанный вами адрес. 
            В "Белый потолок" эскиз успешно отправлен, в ближайшее время мы свяжемся с вами, 
            чтобы обсудить ваши пожелания.'
    );
    return;
}

unlink($attachmentPath);

echo(
    'Спасибо! Мы получили ваш эскиз и отправили его вам на почту. 
        В ближайшее время мы свяжемся с вами, чтобы обсудить ваши пожелания.'
);
