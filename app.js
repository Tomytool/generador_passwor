const numeroCaracteres = document.getElementById('caracteres');
const checkLetras = document.getElementById('letras');
const checkNumeros = document.getElementById('numeros');
const checkSignos = document.getElementById('signos');
const botonGenerar = document.getElementById('generar');

let objetoPasswor = [];
let caracterPasswor = 0;
let cantidadCaracteres = 0;

const letras = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const signos = ['*', '!', '#', '$', '%', '&', '/', '?', '¿'];

const eliminarObjetos = (array1, array2) => {
  array2.forEach((elemento) => {
    const arrayResultado = array1.filter((item) => item !== elemento);
    array1 = arrayResultado;
  });
  return array1;
};

const opcionLetras = () => {
  if (checkLetras.checked) {
    // console.log('cargar opcion letras');
    // console.log(checkLetras.checked);
    objetoPasswor = objetoPasswor.concat(letras);
    // console.log(objetoPasswor);
  } else {
    objetoPasswor = eliminarObjetos(objetoPasswor, letras);
    // console.log(objetoPasswor);
  }
};

const opcionNumeros = () => {
  if (checkNumeros.checked) {
    // console.log('cargar opcion letras');
    // console.log(checkNumeros.checked);
    objetoPasswor = objetoPasswor.concat(numeros);
    // console.log(objetoPasswor);
  } else {
    objetoPasswor = eliminarObjetos(objetoPasswor, numeros);
    // console.log(objetoPasswor);
  }
};

const opcionSignos = () => {
  if (checkSignos.checked) {
    // console.log('cargar opcion letras');
    // console.log(checkSignos.checked);
    objetoPasswor = objetoPasswor.concat(signos);
    // console.log(objetoPasswor);
  } else {
    objetoPasswor = eliminarObjetos(objetoPasswor, signos);
    // console.log(objetoPasswor);
  }
};

const cargar = () => {
  cantidadCaracteres = Number(numeroCaracteres.value);
  console.log(numeroCaracteres.value);
};

const randonPasswor = () => {
  let passwor = [];
  console.log(objetoPasswor.length);
  console.log(cantidadCaracteres);
  if (objetoPasswor.length > 0) {
    for (let i = 1; i < cantidadCaracteres; i++) {
      let cantidad = Math.floor(
        Math.random() * (objetoPasswor.length - 1 + 1) + 1
      );
      //   console.log(cantidad);
      passwor.push(objetoPasswor[cantidad]);
    }
    console.log(passwor.join(''));
    // console.log(passwor);

    // console.log(objetoPasswor);
    // console.log('a generar');
  } else {
    alert('debe elegir alguna opcion');
  }
};

numeroCaracteres.addEventListener('change', cargar);
checkLetras.addEventListener('click', opcionLetras);
checkNumeros.addEventListener('click', opcionNumeros);
checkSignos.addEventListener('click', opcionSignos);
botonGenerar.addEventListener('click', randonPasswor);
