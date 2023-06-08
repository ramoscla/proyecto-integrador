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
    .then(function(response) {
        return response.json();
    })
    .then(function(resultados) {
        console.log(resultados);
        let titulo;
        let foto;
        let cantante;
        for (let i = 0; i < 5; i++) {
            titulo = resultados.data[i].title_short;
            foto = resultados.data[i].album.cover_xl;
            cantante = resultados.data[i].artist.name

            lista_canciones.innerHTML += `
                <li>
                    <h3>${titulo}</h3>
                    <img src="${foto}" alt="">
                    <p>${cantante}</p>
                </li>
            `
        }
    })
    .catch(function(error) {
        console.log(error);
    })

// Fetch ALBUMES
fetch(proxy + url_canciones)
    .then(function(data) {
        return data.json()
    })
    .then(function(resultados) {

    })
    .catch(function(error) {
        console.log(error);
    })

// Fetch ARTISTS
fetch(proxy + url_canciones)
    .then(function(data) {
        return data.json()
    })
    .then(function(resultados) {

    })
    .catch(function(error) {
        console.log(error);
    })