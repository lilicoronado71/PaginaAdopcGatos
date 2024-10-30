//const { error } = require('console');
//Funcionalidad del menú hamburguesa
//console.log("entró al javascript")
const nav = document.querySelector("#navegacion");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//Funcionalidad de login y registro Movimiento formularios
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);

//Declaración de variables
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

//Cuando la ventana este aumentando, disminuyendo de tamañao re-size
function anchoPagina() {
    if (window.innerWidth > 768) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

//Funcion Iniciar Sesión comportamiento cajas traseras y formulario registro
function iniciarSesion() {
    if (window.innerWidth > 768) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }

}
//Funcion de Registro comportamiento cajas traseras y formulario inicio de sesión
function registro() {
    if (window.innerWidth > 768) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }

}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email)
}

//inicio de sesión
const btn_iniciaSesion = document.querySelector('#btn_iniciaSesion');
btn_iniciaSesion.addEventListener("click", event1 => {
    event1.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    //validar el correo electrónico
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Correo inválido";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    //Validar la contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "La contraseña debe tener al menos 6 caracteres.";
        document.getElementById('passwordError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = "none";
    }

    //return isValid;
    if(isValid){
        fetch('cjson/registroUsuarios.json')
        .then(respuesta => respuesta.json()) //Se indica el formato en el que se muestra la información
        .then(usuarios => {
            estaUser = false;
            for (j = 0; j < usuarios.length; j++) {
                console.log("j: " + j);
                console.log(usuarios[j].correoElectronico);
                if (email == usuarios[j].correoElectronico) {
                    estaUser = true;
                    if(password != usuarios[j].contrasenia){
                        alert("Clave incorrecta, no coincide con la almacenada");
                        location.reload();
                    }
                };
            };
            if(!estaUser){
                alert("Usuario no esta registrado, de click en registrarse");
                location.reload();
            }

        }) //Aqui se muestra la información del json
        .catch(error => console.log('Error en la lectura de datos: ' + error.message));
    }
    location.href ="./gaticos.html";
})



//Registro de Usuario
const btn_registro = document.querySelector('#btn_registro');
btn_registro.addEventListener("click", event => {
    event.preventDefault()
    const nombre = document.getElementById('nombreCompleto').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contrasenia').value;
    let isValid = true;

    //validar que ingrese al menos 5 caracteres en el nombre
    if (nombre.length <= 5 || nombre == "") {
        alert("El nombre debe tener al menos 5 caracteres." + nombre);
        isValid = false;
        return false;
    };
    //validar que ingrese al menos 5 caracteres en la dirección
    if (direccion.length <= 5) {
        alert("La dirección debe tener al menos 5 caracteres.");
        isValid = false;
        return false;
    }
    //validar que ingrese al menos 5 caracteres en el teléfono
    if (telefono.length != 10) {
        alert("El número telefonico debe tener 10 caracteres.");
        isValid = false;
        return false;
    }
    //validar el correo electrónico
    if (!validateEmail(email)) {
        alert("La dirección de correo no es válida. por favor verifique");
        isValid = false;
        return false;
    }
    //Validar la contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres ");
        isValid = false;
        return false;
    }

    if (isValid) {
        let nuevoUsuario = {
            nombreCompleto: `${nombre}`,
            Direccion: `${direccion}`,
            Telefono: `${telefono}`,
            correoElectronico: `${email}`,
            contrasenia: `${password}`
        }
        console.log('nuevoUsuario' + nuevoUsuario);

        fetch('cjson/registroUsuarios.json')
        .then(respuesta => respuesta.json()) //Se indica el formato en el que se muestra la información
        .then(usuarios => {

        });
    }
    
       
    //.catch(error => console.error(error));

})


