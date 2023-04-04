let numeroMagico = 0;
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', adivinar);
let btnComenzarJuego = document.getElementById('btnIniciar');

function getRandom(){
    numeroMagico = Math.floor(Math.random()*(50 - 1) + 1);
    console.log(numeroMagico);
    btnComenzarJuego.disabled = true;
    return numeroMagico;
}

function adivinar(e){
    e.preventDefault();
    console.log('desde la función adivinar');
    console.log(e);

    let inputNumero = document.getElementById('inputNumero');
    console.log(inputNumero);
    let dato = parseInt(inputNumero.value);

    console.log(typeof dato);
    console.log(dato);
    if(dato === numeroMagico){
                alert(`Felicitaciones!! Adivinaste el número`)
            }else if(dato > numeroMagico){
                alert(`El número mágico es menor`)
            }else {
                alert(`El número mágico es mayor`)
            }
    formulario.reset();
}


