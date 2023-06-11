

 let lista_generos = document.querySelector('.contenedor-generos ul');
 let proxy = 'https://api.allorigins.win/get?url=';
 let secret_key = 'cdae97f9508fa895f1b77e8427e66299';
 let url_genero = `https://api.deezer.com/genre?limit=5&secret_key=${secret_key}`;
 let generoTitulo = document.querySelector('.generoTitulo');
 let generoFoto = document.querySelector('.generoFoto');
 let generoLi = document.querySelector('.generoLi')

 fetch(proxy + url_genero)
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {
     let datos = JSON.parse(data.contents);
     
     for (let i = 2; i < 6; i++) {
       
            let generoTitulo = datos.data[i].name;
            let generoFoto = datos.data[i].picture;
      
            lista_generos.innerHTML += `
              <li>
              <h3 class="generoTitulo" >${generoTitulo}</h3>
              <img src="${generoFoto}" alt="${generoTitulo}">
              </li>
            `;

     lista_generos.addEventListener('click', function() {
        window.location.href = './detail-genres.html';
      });
      
     }
   })
   .catch(function(error) {
     console.log(error);
 });

 