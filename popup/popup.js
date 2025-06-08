const popupOpenArea = () => {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("#popupDialogArea").style.display = "block";
}
const popupCloseArea = () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#popupDialogArea").style.display = "none";
}
const popupOpenProd = () => {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("#popupDialogProd").style.display = "block";
}
const popupCloseProd = () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#popupDialogProd").style.display = "none";
    bigProduct.innerHTML="";
}
const popupOpenHour = () => {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("#popupDialogHour").style.display = "block";
}
const popupCloseHour = () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#popupDialogHour").style.display = "none";
}
const popupOpenKosher = () => {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("#popupDialogKosher").style.display = "block";
}
const popupCloseKosher = () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#popupDialogKosher").style.display = "none";
}
