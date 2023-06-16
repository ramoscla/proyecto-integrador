let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');

let proxy = 'https://api.allorigins.win/raw?url=';
let urlDetalle = `https://api.deezer.com/artist/${id}`;

fetch(proxy + urlDetalle)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let nombreArtista = document.querySelector('.nombreArtista');
    let detalleArtista = document.querySelector('.detalleArtista');
    
    detalleArtista.innerHTML += `
    <div class='foto-y-nombre-artista'>
    <h2 class="nombreArtista">${data.name}</h2>
    <img class='fotoArtista' src="${data.picture_medium}" alt=""> 
    </div>`;

})

  .catch(function(error) {
    console.log(error);
  });


  let urlDetalle2 = `https://api.deezer.com/artist/${id}/albums`;
  let ArtistaDetalleLista = document.querySelector('.artistaDetalleLista');

  fetch(proxy + urlDetalle2)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);

        for (let i = 0; i < 5; i++) {
            
            let artistaDetalleLista = document.querySelector('.artistaDetalleLista');
            
            artistaDetalleLista.innerHTML += 
            `
            <li>
              <a href="./detail-album.html">${data.data[i].title}</a>
            </li>`;
        } 

        
    })
    .catch(function (error) {
        console.log(error);

    }
    )

    
