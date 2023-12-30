// Halaman ini untuk javascript 

// Interaksi Menu
let menu = document.querySelector('.container .header .menuAndImage .menu');

let navigasi = document.querySelector('.container .header .navigasi');

menu.addEventListener('click', function() {
  navigasi.classList.toggle("aniNav");
});


let mode = document.querySelector('.container main .button');

let span = document.querySelector('.container main .button span');


mode.addEventListener('click', function () {
  if(document.querySelector('html').dataset.mode === 'light'){
    document.querySelector('html').dataset.mode = 'dark';
    span.textContent = 'Light';
  } else{
    document.querySelector('html').dataset.mode = 'light';
      span.textContent = 'Dark';
  }
});
