const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const palabras = text.split(' ');
    const totalPalabras = palabras.filter(palabra => palabra !== '');
    return totalPalabras.length
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    const puntuacion = /[ /[.,;:!?¿¡()"'`´“”‘’\]{}<>\-—_…«»]/g;
    const nuevoTexto = text.replace(puntuacion, "");
    return nuevoTexto.length
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    // Obtengo lista de valores del textArea. Split separa la lista por espacios.
    const listaNumeros = text.split(' ');

    // Aqui filtro los valores de la lista para solo considerar numeros.
    /*const totalNumeros = listaNumeros.filter(
      // 1.- Evaluo itemEnLista con la funcion parseFloat, para saber si es numero.
      // 2.- El resultado de parseFloat evaluo si es NaN.
      // 3.- Si isNaN es true no se considera en la lista y se excluye.
      // 4.- De lo contrario si es false es numero y se considera.
      itemEnLista => isNaN(parseFloat(itemEnLista)) == false
    )*/
    //return totalNumeros.length

    /* let listaTotalNumeros = []
    listaNumeros.forEach(element => {
      if (isNaN(parseFloat(element)) == false) {
        listaTotalNumeros.push(element)
      }
    });
    return listaTotalNumeros.length */

    let listaTotalNumeros = []
    for (let index = 0; index < listaNumeros.length; index++) {
      const element = listaNumeros[index];
      if (isNaN(parseFloat(element)) == false) {
        listaTotalNumeros.push(element)
      }
    }

    return listaTotalNumeros.length
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
