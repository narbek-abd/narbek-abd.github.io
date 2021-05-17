<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name1'];
$phone = $_POST['user_phone1'];
$userMail = $_POST['user_mail1'];
$orderSumm = $_POST['orderSumm'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                                                                           // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'tprofit.mchs@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'aOI1T1apPlt,'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('tprofit.mchs@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('mp203@mprofit.ru');     // Кому будет уходить письмо
$mail->addAddress('mp212@mprofit.ru');     // Кому будет уходить письмо

//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Заявка с тестового сайта';
// $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
// $mail->AltBody = '';

$mail->Subject = 'ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК С САЙТА "TPROFIT.RU".';
$mail->Body    = '<b>Имя пользователя: </b>'.$name.'<br>
                  <b>Номер телефона:</b> <a href="tel:'.$phone.'">'.$phone.'</a><br>
                  <b>Электронная почта:</b> <a href="mailto:'.$userMail.'">'.$userMail.'</a><br>
                  '.$orderSumm;
$mail->AltBody = '';

// if(!$mail->send()) {
//     echo 'Error';
// } else {
//     header('location: thank-you.html');
// }


// для AJAX
if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>