let lista_playlist_ids = localStorage.getItem('playlist_ids') // "['123','4123','12523','12']"
if (JSON.parse(lista_playlist_ids) === null) { // ['123','4123','12523','12']
    lista_playlist_ids = []
} else {
    lista_playlist_ids = JSON.parse(lista_playlist_ids) // ['123','4123','12523','12']
}

console.log(lista_playlist_ids)

let nodo_ul = document.querySelector('.contenedor-canciones ul')

if (lista_playlist_ids.length === 0) {
    nodo_ul.innerHTML = '<h2>No hay canciones en la playlist</h2>'
}

let proxy = 'https://api.allorigins.win/get?url='
let scret_key = '4d3d37287d77a9575cc5d48b706a917a' // Secret Key
let url


for (let i = 0; i < lista_playlist_ids.length; i++) {
    url = `https://api.deezer.com/track/${lista_playlist_ids[i]}&secret_key=${scret_key}`

    fetch(proxy + url)
        .then(function(response) {
            return response.json()
        })
        .then(function(resultados) {
            let datos = JSON.parse(resultados.contents)
            return datos;
        })
        .then(function(datos) {
            let titulo = datos.title_short;
            let foto = datos.album.cover_xl;
            let cantante = datos.artist.name

            nodo_ul.innerHTML += `
                    <li>
                        <a href="detail-songs.html?id=${lista_playlist_ids[i]}">
                            <h3>${titulo}</h3>
                            <img src="${foto}" alt="${titulo}">
                            <a href="detail-artist.html?id=${datos.artist.id}">
                                ${cantante}
                            </a>
                        </a>
                    </li>
                `
        })
        .catch(function(error) {
            console.log(error)
        })
}
const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');


let main =  document.querySelector('main');
let section =  document.querySelector('section');


let preferredMode = localStorage.getItem('preferredMode');

if (preferredMode === 'dark-mode') {
  enableDarkMode();
  
} else {
  enableLightMode();
}

function enableDarkMode() {
  body.classList.add('dark-mode');
  main.classList.add('dark-mode')
  section.classList.add('dark-mode')
  modeToggle.innerText = 'Modo Claro';

}

function enableLightMode() {
  body.classList.remove('dark-mode');
  main.classList.remove('dark-mode')
  section.classList.remove('dark-mode')
  modeToggle.innerText = 'Modo Oscuro';
}

function toggleMode() {
  if (body.classList.contains('dark-mode')) {
    enableLightMode();
    preferredMode = 'light-mode';

  } else {  
    enableDarkMode();
    preferredMode = 'dark-mode';
  
  }

  localStorage.setItem('preferredMode', preferredMode);
}

modeToggle.addEventListener('click', toggleMode);
