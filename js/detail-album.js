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


// Modo Oscuro


// Funcionalidad de la página
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');

let proxy = 'https://api.allorigins.win/raw?url=';
let urlDetalle = `https://api.deezer.com/album/${id}`;

fetch(proxy + urlDetalle)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let nombreAlbum = document.querySelector('.nombreAlbum');
    let detalleAlbum = document.querySelector('.detalleAlbum');

    detalleAlbum.innerHTML += `
      <div class='nombre-foto-albumDetalle'>
        <h2>${data.title}</h2>  
        <img class='fotoAlbum' src="${data.cover_medium}" alt=""> 
      </div>
      <div>
        <h3 class="nombreArtistaAlbum"> - ${data.artist.name}</h3>
        <p>Género: ${data.genres.data[0].name}</p>
        <p>Fecha de publicación: ${data.release_date}</p>
      </div>`;

    for (let i = 0; i < data.tracks.data.length; i++) {
      let listaCancionesAlbum = document.querySelector('.listaCancionesAlbum');
      listaCancionesAlbum.innerHTML += `
        <li class="cancionesAlbumn">
          <a href="./detail-songs.html?id=${data.tracks.data[i].id}">${data.tracks.data[i].title}</a>
        </li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// Inicialización del Modo Oscuro
const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');
let main = document.querySelector('main');
let albumFicha = document.querySelector('.detalleAlbum');
let contenedorAlbum = document.querySelector('.contenedor-detalle-albumes');
let preferredMode = localStorage.getItem('preferredMode');

if (preferredMode === 'dark-mode') {
  habilitarModoOscuro();
} else {
  habilitarModoClaro();
}

modeToggle.addEventListener('click', cambiarModo);
