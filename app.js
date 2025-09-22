let amigos = [];


const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Ese nombre ya está en la lista");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    listaAmigos.innerHTML = "";

    if (amigos.length === 0) {
        listaAmigos.innerHTML = "<li>No hay amigos agregados</li>";
        return;
    }

    for (let amigo of amigos) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;

    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
        return;
    }

    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    resultado.innerHTML = `🎉 El Amigo Secreto es: <strong>${amigos[indiceAmigo]}</strong>`;
}
