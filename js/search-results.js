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
let query = new URLSearchParams(window.location.search)
let search = query.get('search')

let proxy = 'https://api.allorigins.win/get?url='
let url = `https://api.deezer.com/search?q=${search}`
let nodo_ul = document.querySelector('section ul')
let nodo_imagen = document.querySelector('.cargando')

nodo_imagen.src = 'img/cargando.gif'

fetch(proxy + url)
  .then(function (response) {
    return response.json()
  })
  .then(function (resultados) {
    let datos = JSON.parse(resultados.contents)
    return datos;
  })
  .then(function (datos) {
    if (datos.data.length === 0) {
      nodo_ul.innerHTML = '<h2>No hay resultados</h2>'
    } else {
      nodo_imagen.classList.add('ocultar')
      nodo_imagen.classList.remove('cargando')
      // nodo_imagen.style.display = 'none'
      for (let i = 0; i < datos.data.length; i++) {
        let id = datos.data[i].id;
        let titulo = datos.data[i].title_short
        let foto = datos.data[i].album.cover_xl
        let cantante = datos.data[i].artist.name

        nodo_ul.innerHTML += `
                        <li>
                            <a href="detail-songs.html?id=${id}">
                                <h3>${titulo}</h3>
                                <img src="${foto}" alt="${titulo}">
                                <a href="detail-artist.html?id=${datos.data[i].artist.id}">
                                    ${cantante}
                                </a>
                            </a>
                        </li>

                    `



      }
    }
    nodo_imagen.style.display = 'none';
  })
  .catch(function (error) {
    console.log(error)
  });

let agregarNombre = document.querySelector(".contenedor_canciones");
{
  agregarNombre.innerHTML += `${search}`
};




