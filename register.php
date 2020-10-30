<?php

include("con_db.php");
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$consult = $_POST['consult'];
$destinatario = 'ventas@distribuidora-circus.com';

if(isset($_POST['register'])) {

    if (strlen($name) >= 1 &&
        strlen($tel) >= 1 && 
        strlen($email) >= 1 && 
        strlen($consult) >= 1) {
            $name = trim($name);
            $email = trim($email);
            $tel = trim($tel);
            $consult = trim($consult);
            $fechareg = date("d/m/y");
            $regist = "INSERT INTO datos (nombre, telefono, email, duda, fecha_reg) VALUES ('$name','$tel','$email','$consult','$fechareg')";
            $result = mysqli_query($conex,$regist);
            if ($result) {
                ?>
                <!-- <h3 class="formsend">
                ¡Gracias por contactarnos!<br>
                Pronto nos pondremos en contacto contigo.
                </h3> -->
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

$header = "Enviado desde el formulario de Distribuidora Circus";
$mensajeCompleto = "\nMensaje del Cliente: " . $consult . "\nNombre del Cliente: " . $name . "\nEmail del Cliente: " . $email . "\nTelefono del Cliente: " . $tel;
$subj = "Un cliente tiene una consulta: ";

mail($destinatario, $subj, $mensajeCompleto, $header);
echo "<script>alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>

