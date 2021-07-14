<?php

require './placeholders.php';

return [
    'smtp' => [
        'host' => 'smtp.yandex.ru',
        'port' => 465,
        'login' => '',
        'password' => '',
        'fromFriendlyName' => 'Белый Потолок',
    ],
    'ownerEmail' => [
        'email' => 'trifonov.bp@gmail.com',
        'subject' => 'Заявка с beliy-potolok.ru из конструктора потолков',
    
        'htmlBody' =>
            '<p>Заявка из конструктора потолков.</p>
            <p>Данные пользователя:
                <ul>
                    <li>Клиент: <strong>' . CLIENT_NAME . '</strong></li>
                    <li>Телефон: <strong>' . CLIENT_PHONE . '</strong></li>
                    <li>Почта: <strong>' . CLIENT_EMAIL . '</strong></li>' . COMMENT_BODY . '
                </ul>
            </p>
            <p>Во вложении собранный им эскиз.</p>' . ADDITIONAL_BODY,
    
        'textBody' => 
            'Заявка из конструктора потолков.
            
            Данные пользователя:
            Клиент: ' . CLIENT_NAME . '
            Телефон: ' . CLIENT_PHONE . '
            Почта: '. CLIENT_EMAIL . COMMENT_BODY . '
            
            Во вложении собранный им эскиз.' . ADDITIONAL_BODY,

        'commentHtmlBody' =>
            '
            <li>Комментарий: ' . COMMENT . '</li>',

        'commentTextBody' =>
            '
            Комментарий: ' . COMMENT,
    
        'additionalHtmlBody' =>
            '
            <p>Дополнительно клиент указал:
                <ul>
                    <li>Длина: ' . CEILING_LENGTH . ' м.</li>
                    <li>Ширина: ' . CEILING_WIDTH . ' м.</li>
                    <li>Углы: ' . CORNERS . ' шт.</li>
                    <li>Люстра: ' . PRIMARY_LIGHT . ' шт.</li>
                    <li>Светильников: ' . SECONDARY_LIGHTS . ' шт.</li>
                    <li>Труб: ' . TUBES . ' шт.</li>
                </ul>
            </p>',
    
        'additionalTextBody' =>
            '

            Дополнительно клиент указал:
            - Длина: ' . CEILING_LENGTH . ' м.
            - Ширина: ' . CEILING_WIDTH . ' м.
            - Углы: ' . CORNERS . ' шт.
            - Люстра: ' . PRIMARY_LIGHT . ' шт.
            - Светильников: ' . SECONDARY_LIGHTS . ' шт.
            - Труб: ' . TUBES . ' шт.'
    ],
    'clientEmail' => [
        'subject' => 'Ваш эскиз от «Белый потолок»',
    
        'htmlBody' =>
            '<p>Добрый день!</p>
            <p>Вы собрали эскиз на сайте <a href="https://beliy-potolok.ru/constructor">«Белый потолок»</a>. В ближайшее время с вами свяжется менеджер, чтобы обсудить подробности.</p>
            <p>Сам эскиз во вложении.</p>' . ADDITIONAL_BODY . '
            <p>Если не хотите ждать, можете позвонить нам самостоятельно по телефону <strong>+7 (423) 205-58-04</strong>, консультируем ежедневно <strong>с 9 до 20</strong>.</p>
            <p>Это письмо отправлено автоматически. Отвечать на него бесполезно.</p>',
    
        'textBody' =>
            'Добрый день!
    
            Вы собрали эскиз на сайте «Белый потолок». В ближайшее время с вами свяжется менеджер, чтобы обсудить подробности.
            
            Сам эскиз во вложении.' . ADDITIONAL_BODY . '

            Если не хотите ждать, можете позвонить нам самостоятельно по телефону +7 (423) 205-58-04, консультируем ежедневно с 9 до 20.
            
            Это письмо отправлено автоматически. Отвечать на него бесполезно.',
    
        'additionalHtmlBody' =>
            '
            <p>Дополнительно вы указали:
                <ul>
                    <li>Длина: ' . CEILING_LENGTH . ' м.</li>
                    <li>Ширина: ' . CEILING_WIDTH . ' м.</li>
                    <li>Углы: ' . CORNERS . ' шт.</li>
                    <li>Люстра: ' . PRIMARY_LIGHT . ' шт.</li>
                    <li>Светильников: ' . SECONDARY_LIGHTS . ' шт.</li>
                    <li>Труб: ' . TUBES . ' шт.</li>
                </ul>
            </p>',
    
        'additionalTextBody' =>
            '

            Дополнительно вы указали:
            - Длина: ' . CEILING_LENGTH . ' м.
            - Ширина: ' . CEILING_WIDTH . ' м.
            - Углы: ' . CORNERS . ' шт.
            - Люстра: ' . PRIMARY_LIGHT . ' шт.
            - Светильников: ' . SECONDARY_LIGHTS . ' шт.
            - Труб: ' . TUBES . ' шт.'
    ]
];
