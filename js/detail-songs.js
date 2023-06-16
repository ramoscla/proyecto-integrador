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
   
  //preview de 30 segundos
  let preview= document.querySelector(".preview")
  let previewSonido = document.querySelector("#previewSonido")

  let previewUrl =data.preview;
  if(previewUrl){
      previewSonido.src = previewUrl;

      previewSudio.load ();

      previewContainer.style.display = "block"
  }else{
      previewContainer.style.display = "none";
  }}
  )

  
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
      fav.style.backgroundColor = 'lightyellow'
  } else {
      favoritos.push(id);
      fav.innerText = 'Quitar de favorito'
      fav.style.backgroundColor = 'rgb(255, 0, 174)'
  }

  let favoritosToString = JSON.stringify(favoritos);
  localStorage.setItem('favoritos', favoritosToString )
} )




