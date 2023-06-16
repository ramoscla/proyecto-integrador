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



//FUNCIONALIDADES DE LA PAGINA

let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage)

let sectionLista = document.querySelector('#lista');

let cancionesFavoritas = '';
 
if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos seleccionados</p>'
} else { for (let i = 0; i < favoritos.length; i++) {
  
  let proxy = 'https://api.allorigins.win/raw?url=';
  let url = `https://api.deezer.com/track/${favoritos[i]}`;

  fetch(proxy + url)
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      console.log(data);

     cancionesFavoritas +=      `<li class='lista-fav'>  
                                  <a href= "./detail-songs.html?id=${data.id}" > <img src=${data.album.cover} alt='' /> </a>
                                  <a href= "./detail-songs.html?id=${data.id}" > <p> ${data.artist.name}</p> </a>
                                  <h3>S ${data.album.title} </h3>
              
                              </li>` ;

      sectionLista.innerHTML = cancionesFavoritas;
      
  })
  .catch(function(error) {
      console.log(error);
  });
  
}
}


    