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

let lista_generos = document.querySelector('.contenedor-generos ul');
let proxy = 'https://api.allorigins.win/get?url=';
let url_genero = `https://api.deezer.com/genre/`;

let generoTitulo = document.querySelector('.generoTitulo');
let generoFoto = document.querySelector('.generoFoto');
let generoLi = document.querySelector('.generoLi')

fetch(proxy + url_genero)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let datos = JSON.parse(data.contents);
    console.log(datos.data);

    for (let i = 1; i < datos.data.length; i++) {

      let generoTitulo = datos.data[i].name;
      let generoFoto = datos.data[i].picture;

      lista_generos.innerHTML += `
              <li>
              <a class=generoTitulo href="./detail-genres.html?id=${datos.data[i].id}"><img src="${generoFoto}" alt="${generoTitulo}"></a>
              <h3><a class=generoTitulo href="./detail-genres.html?id=${datos.data[i].id}">${generoTitulo}</a></h3>
              </li>
            `;


    }
  })
  .catch(function (error) {
    console.log(error);
  });


//MODO OSCURO 

