let query = new URLSearchParams(window.location.search)
let search = query.get('search')

let proxy = 'https://api.allorigins.win/get?url='
let scret_key = '4d3d37287d77a9575cc5d48b706a917a' // Secret Key
let url = `https://api.deezer.com/search?q=${search}&secret_key=${scret_key}`

let nodo_ul = document.querySelector('section ul')
let nodo_imagen = document.querySelector('.cargando')

nodo_imagen.src = 'img/cargando.gif'

fetch(proxy + url)
    .then(function(response) {
        return response.json()
    })
    .then(function(resultados) {
        let datos = JSON.parse(resultados.contents)
        return datos;
    })
    .then(function(datos) {
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
    .catch(function(error) {
        console.log(error)
    });

    let agregarNombre= document.querySelector(".contenedor_canciones");
    {
agregarNombre.innerHTML += `${search}`
    };
                    
                    
                    
    const modeToggle = document.querySelector('#mode-toggle');
    const body = document.querySelector('body');
   
    
    let main =  document.querySelector('main');
    let section =  document.querySelector('section');
   
    
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
    