window.addEventListener("DOMContentLoaded", function() {
  
    var listaDeAmigos = ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4", "Amigo 5"];
  

    var tituloElemento = document.getElementById("titulo");
    tituloElemento.textContent = "Amigos";
  

    var corpoElemento = document.getElementById("corpo");
    corpoElemento.addEventListener("click", function() {
      alert("opa");
    });
  
 
    var listaAmigosElemento = document.getElementById("lista-amigos");
    listaDeAmigos.forEach(function(amigo) {
      var itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listaAmigosElemento.appendChild(itemLista);
    });
  });
  