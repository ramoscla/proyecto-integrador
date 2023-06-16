

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
     console.log(datos.data);

     for (let i = 1; i < datos.data.length; i++) {
       
            let generoTitulo = datos.data[i].name;
            let generoFoto = datos.data[i].picture;
      
            lista_generos.innerHTML += `
              <li>
              <a class=generoTitulo href="./detail-genres.html?id=${datos.data[i].id}"><img src="${generoFoto}" alt="${generoTitulo}"></a>
              <h3><a class=generoTitulo href="./detail-genres.html?id=${datos.data[i].id}">${generoTitulo}</a></h3>
              </li>
            `;

      
     }
   })
   .catch(function(error) {
     console.log(error);
 });

 const modeToggle = document.querySelector('#mode-toggle');
 const body = document.querySelector('body');

 
 let main =  document.querySelector('main');

 
 let preferredMode = localStorage.getItem('preferredMode');

 if (preferredMode === 'dark-mode') {
   enableDarkMode();
   
 } else {
   enableLightMode();
 }
 
 function enableDarkMode() {
   body.classList.add('dark-mode');
   main.classList.add('dark-mode')
   modeToggle.innerText = 'Modo Claro';
 
 }
 
 function enableLightMode() {
   body.classList.remove('dark-mode');
   main.classList.remove('dark-mode')
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
 