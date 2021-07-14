<?php

use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';

function isEmail($target) {
    return PHPMailer::validateAddress($target);
}

function sendEmail(
    $host = '',
    $port,
    $login,
    $password,
    $fromFriendlyName,
    $toEmail,
    $subject,
    $htmlBody,
    $textBody,
    $attachmentPath
) {
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Host = $host;
    $mail->Port = $port;
    $mail->Username = $login;
    $mail->Password = $password;
    $mail->setFrom($login, $fromFriendlyName);
    $mail->addAddress($toEmail);

    $mail->Encoding = 'base64';
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $htmlBody;
    $mail->AltBody = $textBody;

    $mail->addAttachment($attachmentPath);

    if (!$mail->send()) {
        return $mail->ErrorInfo;
    } else {
        return '';
    }
}

function getEmailBody (
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
    $body,
    $commentBody,
    $additionalBody
) {
    $commentString = '';
    $additionalString = '';

    if ($comment) {
        $commentString = str_replace(
            COMMENT,
            $comment,
            $commentBody
        );
    }

    if ($ceilingLength
        || $ceilingWidth
        || $corners
        || $primaryLight
        || $secondaryLights
        || $tubes
    ) {
        $additionalString = str_replace(
            [
                CEILING_LENGTH,
                CEILING_WIDTH,
                CORNERS,
                PRIMARY_LIGHT,
                SECONDARY_LIGHTS,
                TUBES
            ],
            [
                $ceilingLength,
                $ceilingWidth,
                $corners,
                $primaryLight,
                $secondaryLights,
                $tubes
            ],
            $additionalBody
        );
    }

    return str_replace(
        [CLIENT_NAME, CLIENT_PHONE, CLIENT_EMAIL, COMMENT_BODY, ADDITIONAL_BODY],
        [$clientName, $clientPhone, $clientEmail, $commentString, $additionalString],
        $body
    );
}
