//Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: 
//un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, 
//passant el nombre com a paràmetre.


function callback (missatge){
    document.getElementById("show").innerHTML = missatge;
}

function processar(nombre, callback) {
    const missatge = "Hola, " + nombre;
    callback(missatge);
  }
  
  processar("Rafa", callback);