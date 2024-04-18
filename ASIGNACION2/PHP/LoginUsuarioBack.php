<?php
include 'conexionBack.php';

$Correo = $_POST['Correo'];
$Contrasena = $_POST['Contrasena'];

$validarlogin = mysqli_query($conexion, "SELECT * FROM usuarios where correo ='$Correo'
and contrasena = '$Contrasena'");



/*Validacion*/
if (mysqli_num_rows($validarlogin) > 0) 
{
    $_SESSION ['usuario']=$Correo;
header("location:../homee.html");
exit;
}
else{
    echo 
    '<script>
    alert("EL USUARIO NO EXISTE");   
    window.location = "../login.php";
     </script>'; 
};
exit;
?>