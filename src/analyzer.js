const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    //1.- Separo texto por espacios para obtener un arreglo de palabras
    const palabras = text.split(' ');
    //2.- Filtro el arreglo palabras para se sean solo palabras sin espacios vacios
    const totalPalabras = palabras.filter(palabra =>
      palabra !== '' &&
      isNaN(parseFloat(palabra)) === true);

    //3.- Retorno cantidad de palabras
    return totalPalabras.length
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    //1.- Retorno cantidad de caracteres de un texto
    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    //1.- Declaro variable con caracteres especiales
    const puntuacion = /[ /[.,;:!?¿¡()"'`´“”‘’\]{}<>\-—_…«»]/g;
    //2.- Reemplazo el texto sin contar caracteres especiales y espacios
    const nuevoTexto = text.replace(puntuacion, "");

    //3.- Retorno la cantidad de caracteres del nuevo texto
    return nuevoTexto.length
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    //1.- Declaro variable puntuacion con caracteres especiales, numeros \d y espacios \s
    const puntuacion = /[/[;:!?¿¡()"'`´“”‘’\]{}<>\-—_…«»\d]/g;
    //2.- Reemplazo el texto sin contar puntuacion (caracteres especiales y numeros) y lo dejo vacio
    const nuevoTexto = text.replace(puntuacion, "");
    //3.- Separo texto por espacios para obtener arreglo de palabras
    const palabras = nuevoTexto.split(' ');
    //4.- Obtengo cantidad de palabras
    const resultadoPalabras = palabras.length;
    //5.- Obtengo total longitud ocupando metodo reduce para obtener la suma total caracteres de cada palabra
    const longitudTotal = palabras.reduce((total, palabra) => total + palabra.length, 0)
    //6.- Obtengo longitud media de palabras dividiendo longitud total con cantidad de palabras
    const longitudMedia = longitudTotal / resultadoPalabras
    
    //7.- Retorno longitud media usando 2 decimales con metodo toFixed
    return parseFloat(longitudMedia.toFixed(2))
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    //1.- Obtengo lista de valores del textArea. Split separa la lista por espacios.
    const listaNumeros = text.split(' ');
    //2.- Declaro arreglo para total de numeros
    const listaTotalNumeros = []
    //3.- Recorro cada elemento de lista numero
    for (let index = 0; index < listaNumeros.length; index++) {
      //4.- Obtener el elemento de la posicion index
      let element = listaNumeros[index];

      // Valida que exista el punto en element
      if (element.indexOf(".") > 0) {
        // Quita el ultimo punto
        element = element.match(/\b\d+(\.\d+)?\.?\b/g);
      }
      
      //5.- Validamos si es numero y que no cuente los espacios
      if (isNaN(element) === false && element !== "") {
        //6.- Como se que es numero element se agrega a lista total numeros
        listaTotalNumeros.push(element)
      }
    }
    
    //7.- Retorno total de numeros
    return listaTotalNumeros.length
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    //1.- Separo texto por espacio
    const numeros = text.split(' ');
    //2.- Creo variable para sumar los numeros empezando en 0
    let sumaTotal = 0;
    //3.- Recorro el arreglo numeros con metodo map
    numeros.map(numero => {

      // Valida que exista el punto en numero
      if (numero.indexOf(".") > 0) {
        // Quita el ultimo punto
        numero = parseFloat(numero.match(/\b\d+(\.\d+)?\.?\b/g));
      }

      //4.- Valido si es un numero y que no considere espacios
      if (isNaN(numero) === false && numero !== "") {
        //5.- Como se que es un numero, entonces voy sumando numero a suma total
        sumaTotal = sumaTotal + parseFloat(numero)
      }
    })
    
    //6.- Retono la suma total de los numeros
    return sumaTotal
  },
};

export default analyzer;
