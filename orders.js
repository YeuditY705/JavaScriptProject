document.querySelector('#customerName').innerHTML = JSON.parse(sessionStorage.getItem('customerName'));
// document.querySelector('#storeAddress').innerHTML=store.address.city;

const bag = document.getElementById('myBag');
const totalLink = document.getElementById('total');
const allTheBagDiv = document.getElementById('bag');
const setBag = () => {
    bag.innerHTML = "";
    const currentBag = theCurrentBag();
    // console.log(currentBag);
    let totalPrice = 0;
    currentBag.forEach(prod => {
        if (prod.amount > 0) {
            const currentProduct = document.createElement('div');
            //יצירת כל התגיות למוצר: שם, מחיר, תמונה, תיאור וכפתור להוספה
            const imgProduct = document.createElement('img');
            imgProduct.src = `./images/orders/${store.categoryEnglish[prod.currentProduct.category]}/${prod.currentProduct.name}.png`;
            const nameProduct = document.createElement('h1');
            nameProduct.innerHTML = prod.currentProduct.name;
            const amount = document.createElement('h2');
            amount.innerHTML = prod.amount;
            const priceProduct = document.createElement('h2');
            priceProduct.innerHTML = ` ₪${prod.currentProduct.price * prod.amount} `;
            //כפתור הוספת מוצר
            const addProductButton = document.createElement('button');
            addProductButton.innerHTML = '+';
            addProductButton.onclick = () => {
                totalLink.style.display = 'block';
                addToBag(prod.currentProduct, 1);
                setBag();
                is = false;
            }
            //כפתור הורדת מוצר
            const lessProductButton = document.createElement('button');
            lessProductButton.innerHTML = '-';
            lessProductButton.onclick = () => {
                addToBag(prod.currentProduct, -1);
                setBag();
            }
            const amountDiv = document.createElement('div');
            amountDiv.append(addProductButton, amount, lessProductButton);
            currentProduct.append(imgProduct, nameProduct, priceProduct, amountDiv);
            currentProduct.classList.add('productInBag');
            bag.append(currentProduct);
            totalPrice += prod.currentProduct.price * prod.amount;
        }
        if (totalPrice == 0) {
            totalLink.style.display = 'none';
        }
        else
            totalLink.style.display = 'block';

    });
    totalLink.innerHTML = `לתשלום: ₪${totalPrice}`;
    if (totalPrice == 0) {
        totalLink.style.display = 'none';
        bag.innerHTML = 'העגלה שלך ריקה'
    }
    else
        totalLink.style.display = 'block';
    // if (totalPrice == 0) {
    //     totalLink.style.display = 'none';
    //     bag.innerHTML = 'העגלה שלך ריקה'
    // }
    totalLink.href = `./pay/pay.html?total=${totalPrice}`;
    // }
}
let isOpenCarriage = false;
const seeTheCarriage = document.getElementById('seeTheCarriage');
seeTheCarriage.onclick = () => {
    if (!isOpenCarriage) {
        allTheBagDiv.style.display = "block";
        allTheBagDiv.style.marginRight = "20%";
        allTheBagDiv.style.width = "50%";
        isOpenCarriage = true;
        seeTheCarriage.innerHTML = `<img src="./images/icons/carriage.png"></img>סגירת העגלה`

    }
    else {
        allTheBagDiv.style.display = "none";
        seeTheCarriage.innerHTML = `<img src="./images/icons/carriage.png"></img>לעגלה`;
        isOpenCarriage = false;
    }

}