let aleatorio; 

aleatorio = Math.floor(Math.random() * 100000000000);


const id = document.querySelector('#identificador');

codigo();
function codigo() {
    id.value = aleatorio;
}