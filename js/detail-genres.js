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


    
 const modeToggle = document.querySelector('#mode-toggle');
 const body = document.querySelector('body');

 
 let main =  document.querySelector('main');
 let generoArt =  document.querySelector('.generoArtistas');
 
 
 let preferredMode = localStorage.getItem('preferredMode');

 if (preferredMode === 'dark-mode') {
   enableDarkMode();
   
 } else {
   enableLightMode();
 }
 
 function enableDarkMode() {
   body.classList.add('dark-mode');
   main.classList.add('dark-mode')
   generoArt.classList.add('dark-mode3')
   modeToggle.innerText = 'Modo Claro';
 
 }
 
 function enableLightMode() {
   body.classList.remove('dark-mode');
   main.classList.remove('dark-mode');
   generoArt.classList.remove('dark-mode3')
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