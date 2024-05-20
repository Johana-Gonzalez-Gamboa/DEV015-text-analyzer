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

    lis[1].innerHTML = "Caracteres sin espacios y puntuacion: " + totalCaracteresSinEspacios

    // Logica para conteo de palabras
    const totalPalabras = analyzer.getWordCount(event.target.value)

    lis[2].innerHTML ="Palabras: " + totalPalabras


  }
)

