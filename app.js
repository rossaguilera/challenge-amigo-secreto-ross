// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Ingresa un nombre, por favor.");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarLista();
    
};

function actualizarLista () {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(let ind = 0; ind < amigo.length; ind++){
        let item = document.createElement("li");
        item.textContent =amigo[ind];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos en la lista")
        return;
    }
    let amigoElegido =amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoElegido}`;


}