'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.user_name-list');

const api = 'https://api.github.com/users/';

//Al hacer clic en el botón de buscar se debe:
const handlerUserName = () => {
// Recoger el nick que haya escrito la usuaria en el campo
const user = input.value;
const url = api + user;

// Componer la url para hacer la petición según indiquen en 
//la documentación de la API 
fetch(url)
  .then(r=>r.json())
  .then(data=>{

//Acceder al nombre completo de la criatura
// Seleccionar solo el nombre descartando los apellidos 
//y espacios ﴾si los hubiese﴿
  const fullName = data.name.split(' '); // ["carolina", "cespedes"]
  const userName = fullName[0]; // "carolina"
//Escribir cada letra del nombre, por orden,
//en nuestra página usando una lista ordenada
    let names = '';
    for (let i=0;i<userName.length;i++) {
      names += `<li class="name-list-item">${userName[i]}</li>`;
    }
    list.innerHTML = names;
  });
};

button.addEventListener('click', handlerUserName);