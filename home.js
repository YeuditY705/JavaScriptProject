//העיגולים
const imgArr = ['אומלטים', 'טוסטים', 'כריכים', 'מאפים', 'נשנושים', 'סלטים', 'פיצות', 'פסטות', 'קינוחים'];
const menu = document.getElementById('menu');
const imgMenu = document.getElementsByClassName('imgMenu');
const h3Menu = document.getElementsByClassName('h3Menu');
const pointUnderThePictures = document.getElementsByClassName('pointUnderThePictures');

let colorPoint = 0;
pointUnderThePictures[0].style.color = 'rgb(164, 19, 19)';
//הפונקציה תתרחש כל זמן מה
setInterval(() => {
    moveAuto();
}, 1500);
const moveAuto = () => {
    //הזזת התמונות במערך ימינה
    let temp = imgArr[imgArr.length - 1];
    for (let i = imgArr.length - 1; i > 0; i--) {
        imgArr[i] = imgArr[i - 1];
    }
    imgArr[0] = temp;
    //שינוי התמונה והכיתוב
    for (let i = 0; i < imgMenu.length; i++) {
        imgMenu[i].src = `./images/home/${imgArr[i]}.png`;
        h3Menu[i].innerHTML = imgArr[i];
    }
    //הנקודה האדומה
    pointUnderThePictures[colorPoint].style.color = 'gray';
    colorPoint = colorPoint + 1;
    if (colorPoint >= 9)
        colorPoint = 0;
    if (colorPoint < 0)
        colorPoint = 8;
    pointUnderThePictures[colorPoint].style.color = 'rgb(164, 19, 19)';

}

const burger = document.querySelector('#burger');
const nav = document.querySelector('nav');
const navA = document.getElementsByClassName('navA');
let isBurgerOpen = false;
burger.onclick = () => {
    if (!isBurgerOpen) {
        nav.classList.add('burgerOpenNav');
        for (let a = 0; a < 3; a++)
            navA[a].classList.add('burgerOpenA');
        burger.src = "./images/icons/x.jpg";
        isBurgerOpen = true;
    }
    else {
        nav.classList.remove('burgerOpenNav');
        for (let a = 0; a < 3; a++)
            navA[a].classList.remove('burgerOpenA');
        burger.src = "./images/home/burger.png";
        isBurgerOpen = false;
    }
}

