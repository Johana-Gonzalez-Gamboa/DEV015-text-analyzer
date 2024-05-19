import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector('textarea[name="user-input"]');

textArea.addEventListener(
    "input",
    (event) => {
        const totalCaracteres = analyzer.getCharacterCount(event.target.value)
        const lis = document.querySelectorAll('li');

        lis[0].innerHTML = "Caracteres: " + totalCaracteres
    }
)