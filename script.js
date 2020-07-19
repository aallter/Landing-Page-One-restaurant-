let menu = document.querySelector('.menu');
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

/*blocks Slide*/


let getButtSlide = document.querySelectorAll('.one-butt-slide');
let btn_slide = document.getElementById('btn-slide-block');
let buttWithActive = document.querySelector('.slide-butt-active');

// btn_slide.addEventListener('click', function(event) {
//   var index = getButtSlide.indexOf(event.target);
//
//    if (~index) {
//        return console.log(index);
//    }
// });

getButtSlide.forEach(function(but, i) {
    but.addEventListener("click", function() {
      /*Смена активности кнопок*/
      let buttWithActive = document.querySelector('.slide-butt-active');
        buttWithActive.classList.remove('slide-butt-active');
        getButtSlide[i].classList.add('slide-butt-active');

        /*let getBlockSlide = document.querySelector('#slide-id .flexDiv');
        getBlockSlide.classList.add('d-none');
        getBlockSlide = document.querySelectorAll('#slide-id .flexDiv.d-none');
        getBlockSlide[i].classList.remove('d-none');

        Почему-то эта часть кода работала неправильно и в 3 часа ночи я решил пойти по не такому умному решению , а по противоположному решению такому как код который ниже
        */
        let getBlockSlide = document.querySelectorAll('#slide-id .flexDiv');
        if(i == 0){
          getBlockSlide[0].classList.remove('d-none');
          getBlockSlide[1].classList.add('d-none');
          getBlockSlide[2].classList.add('d-none');
        }else if(i==1){
          getBlockSlide[0].classList.add('d-none');
          getBlockSlide[1].classList.remove('d-none');
          getBlockSlide[2].classList.add('d-none');
        }else if(i == 2){
          getBlockSlide[0].classList.add('d-none');
          getBlockSlide[1].classList.add('d-none');
          getBlockSlide[2].classList.remove('d-none');
        }else{
          alert('oops');
        }
    });
});
