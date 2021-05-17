<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$question_1 = $_POST['question_1'];
$question_2 = $_POST['question_2'];
$question_3 = $_POST['question_3'];
$question_4 = $_POST['question_4'];
$question_5 = $_POST['question_5'];
$question_6 = $_POST['question_6'];


$name = $_POST['user_name3'];
$phone = $_POST['user_phone3'];
$userMail = $_POST['user_mail3'];


$user_message_3 = $_POST['user_message_3'];
$user_check3 = $_POST['user_check3'];


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


// $mail->addAttachment('/var/tmp/file.tar.gz');        // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->addAttachment($_FILES['quizFile']['tmp_name'], $_FILES['quizFile']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Заявка с тестового сайта';
// $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
// $mail->AltBody = '';

$mail->Subject = 'ОТВЕТЫ НА КВИЗ С САЙТА "TPROFIT.RU".';
$mail->Body    = '<b>Имя пользователя: </b>'.$name.'<br>
                  <b>Номер телефона:</b> <a href="tel:'.$phone.'">'.$phone.'</a><br>
                  <b>Электронная почта:</b> <a href="mailto:'.$userMail.'">'.$userMail.'</a><br><br>
                  
                  <b>Ответы на вопросы:</b><br>
                  <b>Организационно-правовая форма: </b>'.$question_1.'.<br>
                  <b>Регион в котором планируете получать лицензию: </b>'.$question_2.'.<br>
                  <b>Необходимые услуги: </b><br>
                  				 - '.$question_3.'.<br>
                  				 - '.$question_4.'.<br>
                  				 - '.$question_5.'.<br>
                  				 - '.$question_6.'.<br>

                  <b>Сообщение: </b>'.$user_message_3.'<br>
           
                  <b>Согласие на обработку персональных данных одтверждено.</b><br>';


$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}

?>