function volverNegro(idDelCuadro) {

    // 1. Buscamos el cuadro exacto en la página web usando su ID
    let elCuadroQueTocaste = document.getElementById(idDelCuadro);

    // 2. Le cambiamos el color de fondo a negro
    elCuadroQueTocaste.style.backgroundColor = "black";

    if (estanTodosEnNegro()) {
        alert("FIN DEL JUEGO")
    } else {
        console.log("No están todos en negro");
    }

}

function estanTodosEnNegro() {
    let todosEnNegro = false;

    let listaDivs = document.getElementsByClassName('cuadrito');
    //listaDivs.length
    for (let n = 0; n < listaDivs.length; n++) {
        console.log('Color ' + n + ' es ' + listaDivs[n].style.backgroundColor);
    }

    return todosEnNegro;
}



window.onload = pintarNumeracion;

function pintarNumeracion() {
    //recorrer los divs y pintar un número en cada uno
    let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++) {
        cuadritos[n].textContent = n + 1;
    }
   pintarCuadritosRosas();
   // pintarCuadritosAzules();
}




function pintarCuadritos() {
    //recorrer los divs y pintar un número en cada uno
    let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++) {
        cuadritos[n].textContent = n + 1;
    }


}

function pintarCuadritosRosas() {
    //recorrer los divs y pintar un número en cada uno
    let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++) {

        //si el cuadro es par, la pinto de rosa
        if (n % 2 == 0)
        {
            cuadritos[n].style.backgroundColor='pink';
        } else {
            cuadritos[n].style.backgroundColor='white';
        }
         //si no, lo pinto de blanco

    }
}
function pintarCuadritosRosas() {
    //recorrer los divs y pintar un número en cada uno
    let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++) {

        //si el cuadro es par, la pinto de rosa
        if (n % 2 == 0)
        {
            cuadritos[n].style.backgroundColor='pink';
        } else {
            cuadritos[n].style.backgroundColor='white';
        }
         //si no, lo pinto de blanco
    }
}

function pintarCuadritosAzules() {
    //recorrer los divs y pintar un número en cada uno
    let cuadritos = document.getElementsByClassName('cuadrito');

    for (let n = 0; n < cuadritos.length; n++) {

        //si el cuadro es impar, la pinto de azul
        if (n % 2 == 0)
        {
            cuadritos[n].style.backgroundColor='white';
        } else {
            cuadritos[n].style.backgroundColor='blue';
        }
         //si no, lo pinto de azul

    }

}
// setInterval(saluda, 7000,"PARÁMETRO 1","PARÁMETRO 2");
// function    myCallback (a,b){

// // Tu código debe ir aqui
// // Los parámetros son totalmente opcionales
// console.log (a);


// console.log(b);

// }
// {
//     alert("HOLA QUE PASA:)")   
// }
let esTableroRosa = true;
let contador Cambios = 0
let idAlarma = setInterval(cambiarColor, 3000);
setInterval (cambiar,7000)

function cambiarColor ()
if (esTableroRosa){
    pintarCuasdradosEnAzul=false;
    contadorCambios=contadorCambios+1 

    { else }
}
{
    pintarCuadritosAzules();
    //si estoy en rosa, pinto en azul
      //si no, si estoy en azul, pinto en rosa
}


