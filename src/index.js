import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector('textarea[name="user-input"]');

textArea.addEventListener(
  "input",
  (event) => {
    const lis = document.querySelectorAll('li');

    // Logica para conteo de caracteres
    const totalCaracteres = analyzer.getCharacterCount(event.target.value)

    lis[0].innerHTML = "Caracteres: " + totalCaracteres

    // Logica para conteo de caracteres sin espacios y puntuacion
    const totalCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(event.target.value)

    lis[1].innerHTML = "Caracteres sin espacios: " + totalCaracteresSinEspacios

    // Logica para conteo de palabras
    const totalPalabras = analyzer.getWordCount(event.target.value)

    lis[2].innerHTML = "Palabras: " + totalPalabras

    // Logica para contao de numeros
    const totalNumeros = analyzer.getNumberCount(event.target.value)

    lis[3].innerHTML = "Numeros: " + totalNumeros

    // Logica para suma de numeros
    const sumaNumeros = analyzer.getNumberSum(event.target.value)

    lis[4].innerHTML = "Suma numeros: " + sumaNumeros

    // Logica para Longitud media de palabras
    const totalLongitud = analyzer.getAverageWordLength(event.target.value)

    lis[5].innerHTML = "Promedio longitud: " + totalLongitud
  }
)

//BORRAR VALORES DE LA APLICACION

// Llamar al boton por su id
const btn = document.getElementById("reset-button");

// Asigno el evento click al boton
btn.addEventListener("click", () => {

  // Por querySlector llego a los li y establezco valor por defecto para cada uno
  document.querySelectorAll('li')[0].innerHTML = "Caracteres";
  document.querySelectorAll('li')[1].innerHTML = "Caracteres sin espacio";
  document.querySelectorAll('li')[2].innerHTML = "Palabras";
  document.querySelectorAll('li')[3].innerHTML = "Numeros";
  document.querySelectorAll('li')[4].innerHTML = "Suma Numeros";
  document.querySelectorAll('li')[5].innerHTML = "Promedio Longitud";


  // Por querySelectror llego al textarea para eliminar su contenido
  document.querySelector('textarea[name="user-input"]').value = '';
}

)



