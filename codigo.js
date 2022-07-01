const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    año = f.getFullYear(),
    diaSemana = f.getDay();
    

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)
    año = ('0' + año).slice(-2)
    

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    
    $fecha.innerHTML = `${año}-${mes}-${dia}`
}
setInterval(() => {
    digitalClock()
}, 1000);

const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);


const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){
    
    spanMinutos.innerHTML = minutos;
    spanSegundos.innerHTML = segundos;
    spanCentesimas.innerHTML = centesimas;
}

function reiniciar(){

    minutos = 0;
    segundos = 0;
    centesimas = 0;
    dibujarTiempo();
}

function accion1(){
    
    if(corriendo){
        detener();
    }
    else{
        iniciar();
    }
}

function iniciar(){

    const sumarMinuto = () => {

        if(minutos < 99) minutos++;
        }

    const sumarSegundo = () => {

        if(segundos === 59){
            segundos = 0;
            sumarMinuto();
        }
        else{
            segundos++;
        }
    }

    const incrementar = () => {

        if(centesimas === 99){
            centesimas = 0;
            sumarSegundo();
        }
        else{
            centesimas++;
        }

        dibujarTiempo();
    }

    corriendo = setInterval(incrementar, 10);
    boton1.innerHTML = "Detener";
}

function detener(){

    clearInterval(corriendo);
    corriendo = null;
    boton1.innerHTML = "Inicar";
}

dibujarTiempo();