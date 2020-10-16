<?php

include("con_db.php");

if(isset($_POST['register'])) {

    if (strlen($_POST['name']) >= 1 &&
        strlen($_POST['tel']) >= 1 && 
        strlen($_POST['email']) >= 1 && 
        strlen($_POST['consult']) >= 1) {
            $name = trim($_POST['name']);
            $email = trim($_POST['email']);
            $tel = trim($_POST['tel']);
            $consult = trim($_POST['consult']);
            $fechareg = date("d/m/y");
            $regist = "INSERT INTO datos (nombre, telefono, email, duda, fecha_reg) VALUES ('$name','$tel','$email','$consult','$fechareg')";
            $result = mysqli_query($conex,$regist);
            if ($result) {
                ?>
                <h3 class="formsend">
                ¡Gracias por contactarnos!<br>
                Pronto nos pondremos en contacto contigo.
                </h3>
                <?php
            } else {
                ?>
                <h3 class="formoops">¡UPS! algo a salido mal</h3>
                <?php
            }


    }       else{
                ?>
                <h3 class="formcantsend">Por favor completa todos los campos.</h3>
                <?php
    }

}
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$consult = $_POST['consult'];

$header = 'From: noreply@example.com' . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
// $header .= "Mime-Version: 1.0 \r\n";
// $header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Teléfono de contacto: " . $tel . " \r\n";
$message .= "Mensaje: " . $_POST['consult'] . " \r\n";
// $message .= "Enviado el: " . date('d/m/Y', time());

$para = 'aleduque.s@gmail.com';
$asunto = 'Mensaje de Distribuidora Circus';

@mail($para, $asunto, utf8_decode($message), $header);
?>

