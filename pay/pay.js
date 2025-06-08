const submitForm = document.querySelector('form');
const succeed = document.querySelector('#succeed');
const creditCardDetail = document.querySelector('#creditCardDetail');


submitForm.onsubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('currentBag', "");
    succeed.style.display = 'block';
    creditCardDetail.style.display = 'none';
setTimeout(() => {
    location.href = '/home.html';
}, 7000);}
const searchParams = new URLSearchParams(location.search);
const totalAmount = parseInt(searchParams.get('total'));
document.querySelector('#sum').innerHTML = ` לתשלום: ₪${totalAmount}`;

const nameCust = sessionStorage.getItem('customerName');
const phoneCust = sessionStorage.getItem('customerPhone');
const customerName = document.querySelector('#name').value = JSON.parse(nameCust);
const customerPhone = document.querySelector('#phone').value = JSON.parse(phoneCust);

let today = new Date();
let hour = today.getHours() + 1;
let minute = today.getMinutes();
if (hour === 24)
    hour = 0;
const timeToCome = document.querySelector('#timeToCome');
timeToCome.innerHTML = `${hour}:${minute}`;