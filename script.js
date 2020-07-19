let menu = document.querySelector('.menu');
console.log(menu);
let idMenWin = document.querySelector('.menu-win');
let idLogo = document.querySelector('.logo');
let idMenImg = document.querySelector('.men-logo');
var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) {
          menu.classList.add('min-menu');
          idLogo.classList.remove('d-none');
          idMenImg.classList.remove('d-none');
        }else{
          menu.classList.remove('min-menu');
          idLogo.classList.add('d-none');
          idMenImg.classList.add('d-none');
          idMenWin.classList.add('d-none');
        }
    },
    mql = window.matchMedia('all and (max-width: 926px)');

handleMatchMedia(mql);
mql.addListener(handleMatchMedia);

/*show window menu*/

let showMen =()=>{
  idMenWin.classList.toggle('d-none');
}
idMenImg.addEventListener('click',showMen);

/*blocks*/
