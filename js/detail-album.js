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
    <p>Género: ${data.genres.data[0].name} </p>
    <p>Fecha de publicación: ${data.release_date}
    </p>

    </div>
   
    `;



        for (let i = 0; i < data.tracks.data.length; i++) {

            let listaCancionesAlbum = document.querySelector('.listaCancionesAlbum');

            listaCancionesAlbum.innerHTML += `
            <li class="cancionesAlbumn"> <a href="./detail-songs.html?id=${data.tracks.data[i].id}">${data.tracks.data[i].title}</a></li>
    `
        }

    })

    .catch(function (error) {
        console.log(error);
    });




    const modeToggle = document.querySelector('#mode-toggle');
    const body = document.querySelector('body');
   
    
    let main =  document.querySelector('main');
    let albumFicha = document.querySelector('.detalleAlbum');
    let contenedorAlbum = document.querySelector('.contenedor-detalle-albumes');
    
    let preferredMode = localStorage.getItem('preferredMode');
   
    if (preferredMode === 'dark-mode') {
      enableDarkMode();
      
    } else {
      enableLightMode();
    }
    
    function enableDarkMode() {
      body.classList.add('dark-mode');
      main.classList.add('dark-mode');
      contenedorAlbum.classList.add('dark-mode');
      albumFicha.classList.add('dark-mode2');
      modeToggle.innerText = 'Modo Claro';
    
    }
    
    function enableLightMode() {
      body.classList.remove('dark-mode');
      main.classList.remove('dark-mode');
      contenedorAlbum.classList.remove('dark-mode');
      albumFicha.classList.remove('dark-mode2');
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