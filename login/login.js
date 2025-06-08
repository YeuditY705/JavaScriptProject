const customerName = document.querySelector('#name')
const customerPhone = document.querySelector('#phone')
const loginBtn = document.querySelector('form')
loginBtn.onsubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('customerName', JSON.stringify(customerName.value));
    sessionStorage.setItem('customerPhone', JSON.stringify(customerPhone.value));
    location.href = '/orders.html';
    console.log();
}
