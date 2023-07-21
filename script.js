// Halaman ini untuk javascript 

// Interaksi Menu
let menu = document.querySelector('.container .header .menuAndImage .menu');

let navigasi = document.querySelector('.container .header .navigasi');

menu.addEventListener('click', function() {
  navigasi.classList.toggle("aniNav");
});
