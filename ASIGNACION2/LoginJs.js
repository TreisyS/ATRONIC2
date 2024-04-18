

document.getElementById("btnRegistrarse").addEventListener("click", Registro);

document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
//DeclaracionVariables
var formulariologin = document.querySelector(".formularioLogin");
var formularioRegistro = document.querySelector(".formularioRegistro");
var ContenedorLoginRegistro = document.querySelector(".contenedorLoginREGISTER");
var cajaTraseraLogin = document.querySelector(".cajatraseralogin");
var cajaTraseraRegistro = document.querySelector(".cajatraseraregistro");

//Intercambio de formularios
function Registro()
{
    if (window.innerWidth > 850){
        formularioRegistro.style.display = "block";
        ContenedorLoginRegistro.style.left = "410px";
        formulariologin.style.display="none";
        cajaTraseraRegistro.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
        ContenedorLoginRegistro.style.left  = "0px";
        formulariologin.style.display="none";
        cajaTraseraRegistro.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    }
}

function iniciarSesion(){
    if (window.innerWidth > 850){
        formulariologin.style.display = "block";
        ContenedorLoginRegistro.style.left = "10px";
        formularioRegistro.style.display = "none";
        cajaTraseraRegistro.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    }else{
        formulariologin.style.display = "block";
        ContenedorLoginRegistro.style.left = "0px";
        formularioRegistro.style.display = "none";
        cajaTraseraRegistro.style.display = "block";
        cajaTraseraLogin.style.display = "none";
    }
}

