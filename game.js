// correct answers
let correctas = [3, 2, 1];

// user answers
let opcion_elegida = [];

let cantidad_correcta = 0;

// funtion 

function respuesta(num_pregunta, seleccionada) {
  //guardo la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;

  //seleccion de colores ante las respuestas para la correccion

  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //selct label color

  seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//function que comparar los arreglos para saber cuantas estuvieron correctas
function corregir() {
  cantidad_correcta = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correcta++;
    }
  }

  document.getElementById("resultado").innerHTML = cantidad_correcta;
}