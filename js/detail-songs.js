//FORMULARIO 
let searchForm = document.querySelector('#search-form')
let searchInput = document.querySelector('#search-input')

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (searchInput.value.length === '') {
    alert('Su campo se encuentra vacio.');
  } else if (searchInput.value.length < 3) {
    alert('Debes escribir al menos tres caracteres.');

  } else {
    this.submit();
  }

})

//MODO OSCURO
const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');


let main = document.querySelector('main');
let section = document.querySelector('section');


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

// FUNCIONALIDADES DE LA PAGINA

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');

let proxy = 'https://api.allorigins.win/raw?url=';
let urlDetalle = `https://api.deezer.com/track/${id}`;

fetch(proxy + urlDetalle)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    let title = document.querySelector('h1');
    let imagen = document.querySelector('main img');
    let aArtista = document.querySelector('.a-artista');
    let aAlbum = document.querySelector('.a-album');

    title.innerText = data.title_short;
    imagen.src = data.album.cover_medium;
    aArtista.innerText = 'Artista: ' + data.artist.name;
    aAlbum.innerText = 'Disco: ' + data.album.title;
  })
  .catch(function(error) {
    console.log(error);
  });

  let favoritos = [];

  let recuperoStorage = localStorage.getItem('favoritos');

  let fav = document.querySelector('#fav');

  if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

if (favoritos.includes(id)) {
  fav.innerText = 'Quitar de Favoritos'
}

fav.addEventListener('click', function() {
  if (favoritos.includes(id)) {
      let indice = favoritos.indexOf(id)
      favoritos.splice(indice, 1);
      fav.innerText = 'Agregar a favorito'
  } else {
      favoritos.push(id);
      fav.innerText = 'Quitar de favorito'
  }

  let favoritosToString = JSON.stringify(favoritos);
  localStorage.setItem('favoritos', favoritosToString )
} )




