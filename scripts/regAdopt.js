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


//Funcionalidad de login y registro
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

window.addEventListener("resize", anchoPagina);

//Declaración de variables
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

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

//Funcion Iniciar Sesión
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
//Funcion de Registro
function register() {
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

function ingresoUsuario() {
    console.log("Función ingresoUsuario");
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

    return isValid;
}