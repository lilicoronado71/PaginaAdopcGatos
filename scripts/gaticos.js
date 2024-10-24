const nav = document.querySelector("#navegacion");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



function searchCat(){
   alert("Entró a la función");
}


let CantGatos = [
    {
        "raza":"Africano Doméstico",
        "cantidad":2
    },
    {
        "raza":"Angora",
        "cantidad":5
    },
    {
        "raza":"Azul Ruso",
        "cantidad":1
    },
    {
        "raza":"Balinés",
        "cantidad":2
    }, {
        "raza":"Bombay",
        "cantidad":10
    },
    {
        "raza":"Bosque de Siberia",
        "cantidad":1
    },
    {
        "raza":"Burmilla",
        "cantidad":2
    },
    {
        "raza":"Calico",
        "cantidad":3
    },
    {
        "raza":"Carey",
        "cantidad":3
    },
    {
        "raza":"Criollo",
        "cantidad":7
    },
    {
        "raza":"German Rex",
        "cantidad":1
    },
    {
        "raza":"Leopardo Doméstico",
        "cantidad":1
    },
    {
        "raza":"Persa de Pelo Negro",
        "cantidad":4
    },
    {
        "raza":"Tabbyo",
        "cantidad":7
    }
];

//console.log(CantGatos[1].raza);
//console.log(CantGatos[1].cantidad);

// CantGatos.forEach(function(razaCantidad) {
//     console.log(razaCantidad);
// });

// CantGatos.forEach(function(recorrido) {
//     console.log(recorrido.raza);
// });

//Ejemplo For

for(i=0; i<CantGatos.length; i++){
    console.log("i: "+i);
    console.log(CantGatos[i]);
    if(CantGatos[i].cantidad == 3){
        console.log("Estas razas tienen 3");
    }
}