const Contenedor = document.getElementById("contador");
const Resett  = document.getElementById("reset");
let num = parseInt(Contenedor.value); 

function Contar() {
    num++;
    Contenedor.value = num; 
}
function Reset()
{
    num=0;
    Contenedor.value = num;
}

Contenedor.addEventListener("click", () => {
    Contar();
});

Resett.addEventListener("click",() =>
{
    Reset();
} )
