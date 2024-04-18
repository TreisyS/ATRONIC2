<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="CSS/Login.css">

</head>
<body  class="gradient">
<section>
        <img src="FOTOS/Imagen6.png" style="height: 2.8cm;">
<img src="fotos/LogoTreisysinfondo.png" style="height: 2.2cm;  margin-left: 33.8cm; box-shadow: 1ch;">
    </section>
<main>

<div class="contenedortodo">

<div class="cajatrasera">

<div class="cajatraseralogin">
    <h2>
    ¿Ya tienes una cuenta?
    </h2>
    <p> Inicia sesion para entrar en la página</p>
    <button id="btnIniciarSesion">Iniciar </button>
</div>

<div class="cajatraseraregistro">
<h3>¿Aún no tienes una cuenta?</h3>
<p>Registrate para que puedas iniciar sesión</p>
<button id="btnRegistrarse">Registrarse</button>

</div>
</div>

<div class="contenedorLoginREGISTER">

<form action="php/LoginUsuarioBack.php" method="POST" class="formularioLogin">
    <h2> Iniciar Sesion</h2>
    <input type="text" placeholder="Correo Electronico" name="Correo" required>
    <input type="password" placeholder="Contraseña" name="Contrasena" required>
    <button> Entrar </button>
</form>



<form action="php/RegistroUsuarioBack.php" method="POST" class="formularioRegistro">

<h2>Registrarse</h2>
<input type="text" placeholder="Nombre Completo" name= "NombreCompleto">
<input type="text" placeholder="Correo Electronico" name="Correo">
<input type="text" placeholder="Usuario" name="usuario">
<input type="password" placeholder="Contraseña" name="Contrasena">
<button>Registrarse</button>


</form>
</div>
</div>

    </main>

 <script src="LoginJs.js"></script>
</body>
</html>