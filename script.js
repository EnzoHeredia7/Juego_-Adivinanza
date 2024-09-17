// el juego selecciona un numero a la azar
let numeroAzar = Math.floor(Math.random()*100)+ 1


let numeroDeEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0


function chequearResultado(){
    intentos ++ 
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroDeEntrada.value)
    if ( numeroIngresado < 1 ||  numeroIngresado > 100 || isNaN(numeroIngresado) ){
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }  

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "Felicitaciones Has Adivinado"
        mensaje.style.color = 'green'
        numeroDeEntrada.disable = true
    }else if( numeroIngresado < numeroAzar){
        mensaje.textContent = "Mas Alto, el numero es mayor al que dijiste"
        mensaje.style.color = 'red'
    }else {
        mensaje.textContent = "Mas bajo, el numero es menor al que dijiste"
        mensaje.style.color = 'red'
    }
}