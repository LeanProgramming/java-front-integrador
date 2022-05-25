/* Footer */
const footer_text = `
<footer class="mt-3">
    <div style="background-color:#136487">
        <div class="container d-flex justify-content-evenly align-items-center text-center flex-wrap">
            <a class="text-decoration-none p-2 m-3 text-light" href="#">Preguntas<br> Frecuentes</a>

            <a class="text-decoration-none p-2 m-3 text-light" href="#">Contáctanos</a>

            <a class="text-decoration-none p-2 m-3 text-light" href="#">Prensa</a>

            <a class="text-decoration-none p-2 m-3 text-light" href="#">Conferencias</a>

            <a class="text-decoration-none p-2 m-3 text-light text-wrap" href="#">Términos y <br> condiciones</a>

            <a class="text-decoration-none p-2 m-3 text-light" href="#">Privacidad</a>

            <a class="text-decoration-none p-2 m-3 text-light" href="#">Estudiantes</a>
        </div>
    </div>
</footer>
`

const footer = document.getElementById('pie_de_pagina');
footer.innerHTML = footer_text;

/* Evento al presionar el botón resumen */

document.getElementById('resumen').addEventListener("click", resumen_compra);

function valida_nombre() {
    let nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        document.querySelectorAll('.warning')[0].innerHTML = '*Debe ingresar un nombre';
        return false;
    }
    document.querySelectorAll('.warning')[0].innerHTML = '';
    return true;
}

function valida_apellido() {
    let apellido = document.getElementById('apellido').value;
    if (apellido === '') {
        document.querySelectorAll('.warning')[1].innerHTML = '*Debe ingresar un apellido';
        return false;
    }
    document.querySelectorAll('.warning')[1].innerHTML = '';
    return true;
}

function valida_correo() {
    let correo = document.getElementById('email').value;
    if (correo === '') {
        document.querySelectorAll('.warning')[2].innerHTML = '*Debe ingresar un correo';
        return false;
    }
    document.querySelectorAll('.warning')[2].innerHTML = '';
    return true;
}

function valida_cantidad(cantidad) {
    if (cantidad.value === '') {
        document.querySelectorAll('.warning')[3].innerHTML = '*Debe ingresar una cantidad';
        return false;
    }
    document.querySelectorAll('.warning')[3].innerHTML = '';
    return true;
}

function resumen_compra() {
    let cantidad = document.getElementById('cantidad_ticket')
    let categoria = document.getElementById('select_categoria');
    let total = document.getElementById('total_a_pagar');

    console.log(cantidad.value)
        if(valida_nombre() && valida_apellido() && valida_correo() && valida_cantidad(cantidad)) {
            cantidad = Number.parseInt(cantidad.value)
            semitotal = 200 * cantidad;
            
            switch (categoria.value) {
                case 'estudiante':
                    total.innerHTML = semitotal - (semitotal * 0.8);
                    break;
                case 'trainee':
                    total.innerHTML = semitotal - (semitotal * 0.5);
                    break;
                case 'junior':
                    total.innerHTML = semitotal - (semitotal * 0.15);
                   break;
            }
        } 
}