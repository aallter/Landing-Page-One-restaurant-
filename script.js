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

getButtSlide.forEach(function(but, i) {
    but.addEventListener("click", function() {
      /*Смена активности кнопок*/
      let buttWithActive = document.querySelector('.slide-butt-active');
        buttWithActive.classList.remove('slide-butt-active');
        getButtSlide[i].classList.add('slide-butt-active');

      /*Edit content*/
        let getBlockSlide = document.querySelectorAll('#slide-id .flexDiv');
            for(let j=0;j<getBlockSlide.length;j++){
              if(!getBlockSlide[j].classList.contains('d-none') && getBlockSlide[j].classList.contains('my-d-block') ){
                  getBlockSlide[j].classList.remove('my-d-block');
                  getBlockSlide[j].classList.add('d-none');
              }
            }
        /*add class d-block next slide*/
            getBlockSlide[i].classList.remove('d-none');
            getBlockSlide[i].classList.add('my-d-block');
    });
});

/*SLIDE MENU RESTAURANT*/

let getCategoriyMenu = document.querySelectorAll('.li-menu-rest');
let getImgMenu = document.querySelectorAll('#img-menu img');

let arr_cat_men=[];

for (let i = 0; i < getCategoriyMenu.length; i++) {
    arr_cat_men.push(getCategoriyMenu[i]);
/*get index categori*/
    getCategoriyMenu[i].addEventListener('click', function(e){
    let ind = (arr_cat_men.indexOf(e.target));
    console.log(ind);
/*delete d-block back slide*/
    for(let j=0;j<getImgMenu.length;j++){
      if(!getImgMenu[j].classList.contains('d-none') && getImgMenu[j].classList.contains('my-d-block') ){
          getImgMenu[j].classList.remove('my-d-block');
          getImgMenu[j].classList.add('d-none');
      }
    }
/*add class d-block next slide*/
    getImgMenu[ind].classList.remove('d-none');
    getImgMenu[ind].classList.add('my-d-block');
 });
}

/*Плавный переход по якорным ссылкам*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start', inline: 'start'
    })
  })
}
