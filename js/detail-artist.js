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
let detalleArtista = document.querySelector('.detalleArtista')

let preferredMode = localStorage.getItem('preferredMode');

if (preferredMode === 'dark-mode') {
  enableDarkMode();

} else {
  enableLightMode();
}

function enableDarkMode() {
  body.classList.add('dark-mode');
  main.classList.add('dark-mode');
  detalleArtista.classList.add('dark-mode2');
  modeToggle.innerText = 'Modo Claro';

}

function enableLightMode() {
  body.classList.remove('dark-mode');
  main.classList.remove('dark-mode')
  detalleArtista.classList.remove('dark-mode2');
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
let urlDetalle = `https://api.deezer.com/artist/${id}`;

fetch(proxy + urlDetalle)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let nombreArtista = document.querySelector('.nombreArtista');
    let detalleArtista = document.querySelector('.detalleArtista');

    detalleArtista.innerHTML += `
    <div class='foto-y-nombre-artista'>
    <h2 class="nombreArtista">${data.name}</h2>
    <img class='fotoArtista' src="${data.picture_medium}" alt=""> 
    </div>`;

  })

  .catch(function (error) {
    console.log(error);
  });


let urlDetalle2 = `https://api.deezer.com/artist/${id}/albums`;
let ArtistaDetalleLista = document.querySelector('.artistaDetalleLista');

fetch(proxy + urlDetalle2)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

    console.log(data);

    for (let i = 0; i < 5; i++) {

      let artistaDetalleLista = document.querySelector('.artistaDetalleLista');

      artistaDetalleLista.innerHTML +=
        `
            <li>
              <a href="./detail-album.html?id=${data.data[i].id}">${data.data[i].title}</a>
            </li>`;
    }


  })
  .catch(function (error) {
    console.log(error);

  }
  )

