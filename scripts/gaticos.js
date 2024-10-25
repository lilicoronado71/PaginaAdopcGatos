const nav = document.querySelector("#navegacion");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



window.addEventListener("load", function(event) {
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
        let option = document.createElement('OPTION');
        option.innerHTML = CantGatos[i].raza;
        option.value = CantGatos[i].raza;
        select.options.add(option);
        //console.log(CantGatos[i].raza);
    }
});

function ShowSelected(){
    /* Para obtener el valor seleccionado */
    var cod = document.getElementById("listaRazasGatos").value;
    console.log("value:  " + cod);
    
    // /* Para obtener el texto */
    // var combo = document.getElementById("listaRazasGatos");
    // var selected = combo.options[combo.selectedIndex].text;
    // alert("texto" + selected);
}
 function BuscarGatos(){
    alert("entro a la funciión BuscarGatos");
    
 }







    //console.log(CantGatos[1].raza);
    //console.log(CantGatos[1].cantidad);

    // CantGatos.forEach(function(razaCantidad) {
    //     console.log(razaCantidad);
    // });

    // CantGatos.forEach(function(recorrido) {
    //     console.log(recorrido.raza);
    // });