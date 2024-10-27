const nav = document.querySelector("#navegacion");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



window.addEventListener("load", function (event) {
    //alert("Entró a la función");

    //Lista desplegable de razas de gatos
    let CantGatos = [
        {
            "raza": "Africano Doméstico",
            "cantidad": 2
        },
        {
            "raza": "Angora",
            "cantidad": 5
        },
        {
            "raza": "Azul Ruso",
            "cantidad": 1
        },
        {
            "raza": "Balinés",
            "cantidad": 2
        }, {
            "raza": "Bombay",
            "cantidad": 10
        },
        {
            "raza": "Bosque de Siberia",
            "cantidad": 1
        },
        {
            "raza": "Burmilla",
            "cantidad": 2
        },
        {
            "raza": "Calico",
            "cantidad": 3
        },
        {
            "raza": "Carey",
            "cantidad": 3
        },
        {
            "raza": "Criollo",
            "cantidad": 7
        },
        {
            "raza": "German Rex",
            "cantidad": 1
        },
        {
            "raza": "Leopardo Doméstico",
            "cantidad": 1
        },
        {
            "raza": "Persa de Pelo Negro",
            "cantidad": 4
        },
        {
            "raza": "Tabby",
            "cantidad": 7
        }
    ];

    let select = document.getElementById("listaRazasGatos");

    for (i = 0; i < CantGatos.length; i++) {
        //console.log("i: "+i);
        let option = document.createElement('OPTION');  //crea el tag option del select
        option.innerHTML = CantGatos[i].raza;
        option.value = CantGatos[i].raza;
        select.options.add(option);
        //console.log(CantGatos[i].raza);
    }
});

// function ShowSelected() {
//     /* Para obtener el valor seleccionado */
//     var cod = document.getElementById("listaRazasGatos").value;
//     console.log("cod:  " + cod);
//     return cod;

//     // /* Para obtener el texto */
//     // var combo = document.getElementById("listaRazasGatos");
//     // var selected = combo.options[combo.selectedIndex].text;
//     // alert("texto" + selected);
// }

//location.reload();
function BuscarGatos() {
    //alert("entro a la función BuscarGatos");
    let cuerpotabla = document.getElementById('resulTabla');
    cuerpotabla.innerHTML = "";  //reinicia la tabla
    var cod = document.getElementById("listaRazasGatos").value;

    if (cod != "") {
        console.log(fetch('cjson/registroGaticos.json'));

        const tabla = document.querySelector('#lista-gatos tbody');
        console.log("raza seleccionada: " + cod);
        //La interfaz Fetch API permite que el navegador web realice solicitudes HTTP a servidores web.
        fetch('cjson/registroGaticos.json')
            .then(respuesta => respuesta.json()) //Se indica el formato en el que se muestra la información
            .then(gatos => {
                for (j = 0; j < gatos.length; j++) {
                    //console.log("j: " + j);
                    console.log(gatos[j].raza);
                    if (cod == gatos[j].raza) {
                        //alert("Son la misma raza");
                        const row = document.createElement('tr');
                        row.innerHTML += `
                            <td>${gatos[j].nombGato}</td>
                            <td>${gatos[j].edad}</td>
                            <td>${gatos[j].colorPelaje}</td>
                            <td>${gatos[j].sexo}</td>
                            <td>${gatos[j].esterilizado}</td>
                            <td>${gatos[j].vacunas}</td>
                            <td>${gatos[j].marcas}</td>
                            <td><img src="${gatos[j].fotoGato}"></td>
                        `;
                        tabla.appendChild(row);
                    };
                };
            }) //Aqui se muestra la información del json
            .catch(error => console.log('Error en la lectura de datos: ' + error.message));
    }
}

//BuscarGatos();






//console.log(CantGatos[1].raza);
//console.log(CantGatos[1].cantidad);

// CantGatos.forEach(function(razaCantidad) {
//     console.log(razaCantidad);
// });

// CantGatos.forEach(function(recorrido) {
//     console.log(recorrido.raza);
// });