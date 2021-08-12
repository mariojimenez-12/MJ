const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const mensaje = document.querySelector('#mensaje');
const email = document.querySelector('#email');
const formulario = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    nombre.addEventListener('blur', validarFormulario);
    apellido.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
}

function validarFormulario(e) {


    if( e.target.value.length > 0 ) {
        const error = document.querySelector('p.error');
        if ( error ) {
            error.remove();
        }
        e.target.style.borderColor = 'green';
    }else {
        e.target.style.borderColor = 'red';

        mostrarError('Todos los campos son obligatorios');
    }

    if ( e.target.type === 'email' ) {

        if ( er.test( e.target.value ) ) {
            e.target.style.borderColor = 'green';
        }else {
            e.target.style.borderColor = 'red';
            mostrarError('Email no valido');
        }
    }

    if ( nombre.value !== '' && apellido.value !== '' && er.test( email.value ) && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-danger', 'text-center', 'mt-2', 'error');

    const errores = document.querySelectorAll('.error');
    if ( errores.length === 0 ) {
        formulario.appendChild(mensajeError);
    }

}