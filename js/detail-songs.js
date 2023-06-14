let query = new URLSearchParams(window.location.search)
let id = query.get('id')

let proxy = 'https://api.allorigins.win/get?url='
let scret_key = '4d3d37287d77a9575cc5d48b706a917a' // Secret Key
let url = `https://api.deezer.com/track/${id}&secret_key=${scret_key}`

let nodo_imagen = document.querySelector('section img') // Foto album
let nodo_h1 = document.querySelector('section h1') // Titulo cancion
let nodo_h6_a = document.querySelector('section h6 a') // Artista
let nodo_p_a = document.querySelector('section p a') // Album
let nodo_button = document.querySelector('section button') // Agregar a playlist

fetch(proxy + url)
    .then(function(response) {
        return response.json()
    })
    .then(function(resultados) {
        let datos = JSON.parse(resultados.contents)
        return datos;
    })
    .then(function(datos) {
        nodo_imagen.src = datos.album.cover_xl
        nodo_h1.textContent = datos.title_short
        nodo_h6_a.textContent = datos.artist.name
        nodo_h6_a.href = `detail-artist.html?id=${datos.artist.id}`
        nodo_p_a.textContent = datos.album.title
        nodo_p_a.href = `detail-album.html?id=${datos.album.id}`

        let lista_playlist_ids = localStorage.getItem('playlist_ids') // "['123','4123','12523','12']"
        if (JSON.parse(lista_playlist_ids) === null) { // ['123','4123','12523','12']
            lista_playlist_ids = []
        } else {
            lista_playlist_ids = JSON.parse(lista_playlist_ids) // ['123','4123','12523','12']
        }

        nodo_button.addEventListener('click', function() {
            if (lista_playlist_ids.includes(datos.id)) {
                let posicion_id = lista_playlist_ids.indexOf(datos.id) // 2
                lista_playlist_ids.splice(posicion_id, 1) // ['123','4123','12']
            } else {
                lista_playlist_ids.push(datos.id) // ['123','4123','12523','12', '9999999']
            }
            let cancion_string = JSON.stringify(lista_playlist_ids) // "['123','4123','12523','12', '9999999']"
            localStorage.setItem('playlist_ids', cancion_string) 
            console.log(lista_playlist_ids)
        })

    })
    .catch(function(error) {
        console.log(error)
    })