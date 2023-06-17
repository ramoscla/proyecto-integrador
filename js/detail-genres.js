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


//FUNCIONALIDADES DE LA PAGINA
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');

let proxy = 'https://api.allorigins.win/get?url=';
let urlDetalle = `https://api.deezer.com/genre/${id}`



fetch(proxy + urlDetalle)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let datos = JSON.parse(data.contents);
    let generoDetalleNombre = document.querySelector('.generoDetalleNombre');

    generoDetalleNombre.innerText += datos.name;

  })
  .catch(function (error) {
    console.log(error);
  }
  )

let urlDetalle2 = `https://api.deezer.com/genre/${id}/artists`;
let generoArtistas = document.querySelector('.generoArtistas');

fetch(proxy + urlDetalle2)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let datos = JSON.parse(data.contents);

    for (let i = 1; i < datos.data.length; i++) {
      generoArtistas.innerHTML += `<li>
             <h3 class="nombreArtistaGenero"><a href="./detail-artist.html?id=${datos.data[i].id}"> ${datos.data[i].name}</a></h3>
             <a href="./detail-artist.html?id=${datos.data[i].id}"><img class='fotoArtistaGenero' src="${datos.data[i].picture}" alt="${datos.data[i].name}"</a>
            
             </li>`;
    }

    console.log(datos);
  })
  .catch(function (error) {
    console.log(error);

  }
  )


