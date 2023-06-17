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


// FUNCIONALIDADES DE LA PAGINA
let lista_canciones = document.querySelector('.contenedor-canciones ul')
let lista_albumes = document.querySelector('.contenedor-albumes ul')
let lista_artistas = document.querySelector('.contenedor-artistas ul')

let proxy = 'https://api.allorigins.win/get?url='

let scret_key = '4d3d37287d77a9575cc5d48b706a917a' // Secret Key

let url_canciones = `https://api.deezer.com/chart/0/tracks?limit=5&secret_key=${scret_key}` // Canciones
let url_albumes = `https://api.deezer.com/chart/0/albums?limit=5&secret_key=${scret_key}` // Albumes
let url_artistas = `https://api.deezer.com/chart/0/artists?limit=5&secret_key=${scret_key}` // Artistas

// Fetch CANCIONES
fetch(proxy + url_canciones)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        let datos = JSON.parse(resultados.contents)
        return datos;
    })
    .then(function (datos) {
        let titulo;
        let foto;
        let cantante;
        for (let i = 0; i < 5; i++) {
            titulo = datos.data[i].title_short;
            foto = datos.data[i].album.cover_xl;
            cantante = datos.data[i].artist.name

            lista_canciones.innerHTML += `
                <li> <a href= "./detail-songs.html?id=${datos.data[i].id}" > 
                    <h3>${titulo}</h3> 
                    <img src="${foto}" alt="${titulo}"> </a>
                    <a href= "./detail-artist.html?id=${datos.data[i].artist.id}" <p>${cantante}</p>  </a>
                </li>
            `
        }
    })
    .catch(function (error) {
        console.log(error);
    })

// Fetch ALBUMES
fetch(proxy + url_albumes)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        let datos = JSON.parse(resultados.contents)
        return datos;
    })
    .then(function (datos) {
        console.log(datos);
        let titulo;
        let foto;
        let cantante;
        for (let i = 0; i < 5; i++) {
            titulo = datos.data[i].title;
            foto = datos.data[i].cover_xl;
            cantante = datos.data[i].artist.name;

            lista_albumes.innerHTML += `
                <li>
                <a href= "./detail-album.html?id=${datos.data[i].id}"> <h3>${titulo}</h3>  </a>
                
                <a href= "./detail-album.html?id=${datos.data[i].id}"> <img src="${foto}" alt="${titulo}"> </a>
                
                <a href= "./detail-artist.html?id=${datos.data[i].artist.id}"> <p>${cantante}</p>  </a>
                
                </li>
            `
        }

    })
    .catch(function (error) {
        console.log(error);
    })

// Fetch ARTISTS
fetch(proxy + url_artistas)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        let datos = JSON.parse(resultados.contents)
        return datos;
    })
    .then(function (datos) {
        let titulo;
        let foto;
        let cantante;
        for (let i = 0; i < 5; i++) {
            titulo = datos.data[i].name;
            foto = datos.data[i].picture_xl;

            lista_artistas.innerHTML += `
                <li> 
                <a href= "./detail-artist.html?id=${datos.data[i].id}" >  <h3>${titulo}</h3> </a>
                <a href= "./detail-artist.html?id=${datos.data[i].id}" > <img src="${foto}" alt="${titulo}"> </a>
                </li>
            `
        }

    })
    .catch(function (error) {
        console.log(error);
    })


//MODO OSCURO
