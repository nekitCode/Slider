const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
const blockImg = document.querySelector('.blockImg');

let arrImgAuto = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg',];

btnNext.addEventListener('click', clickByBtnNext);

let count = 0;
let createTagImg = document.createElement('img');
createTagImg.style.width = '718px';
createTagImg.style.height = '345px';
createTagImg.src = arrImgAuto[0]
blockImg.appendChild(createTagImg);

function clickByBtnNext() {
   count++;
   if(count > arrImgAuto.length - 1){
       count = 0;
   }
    createTagImg.src = arrImgAuto[count];
}

btnPrev.addEventListener('click',clickByBtnPrev);

function clickByBtnPrev() {
    count--;
    if(count < 0){
        count = arrImgAuto.length - 1;
    }
    createTagImg.src = arrImgAuto[count];
}