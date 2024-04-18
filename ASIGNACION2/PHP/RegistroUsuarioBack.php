
<?php

include 'conexionBack.php';


$NombreCompleto = $_POST['NombreCompleto'];
$Correo = $_POST['Correo'];
$usuario = $_POST['usuario'];
$Contrasena = $_POST['Contrasena'];


$query = "INSERT INTO usuarios(NombreCompleto, Correo, usuario, Contrasena)
          VALUES('$NombreCompleto', '$Correo', '$usuario', '$Contrasena')";


          $EJECUTARQUERY = mysqli_query($conexion, $query);

          if($EJECUTARQUERY )
          {
            echo '<script>
            alert("Registro Exitoso");
            window.location = "../Login.php";
            </script>';
          }
          else
          {
            echo '<script>
            alert("Registro Fallido, intentalo otra vez");
            window.location = "../Login.php";
            </script>';
          }
          mysqli_close($conexion);

?>