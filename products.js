//קבלת הדיב של הקטגוריות
const categoryDiv = document.getElementById('category');
//קבלת הדיב של המוצרים
const prodDiv = document.getElementById('products');
//אוביקט חנות
const store = {
    products: [],
    categoryHebrew: [],
    categoryEnglish: [],
    address: {},
};
//מספר המוצרים שנמצאו ע"י החיפוש
const numOfFound = document.querySelector('#numOfFound');
//בשעת טעינת הדף לראשונה
$.ajax({

    url: './Data/products.json',
    //אחרי הצלחת התחברות לשרת
    success: (data) => {
        setBag();
        //המערכים יקבלו את המידע מהמסד נתונים
        const { products, categoryEnglish, categoryHebrew, address } = data;
        store.categoryHebrew = categoryHebrew;
        store.categoryEnglish = categoryEnglish;
        store.products = products;
        store.address = address;
        //עריכת המוצרים 
        setBag();
        setProducts(store.products);
    }
})

//פונקציה שהמציגה את כל הקטגוריות
const setCategory = (i) => {
    const newCategoryDiv = document.createElement('div');
    const newCategory = document.createElement('a');
    const newImgCategory = document.createElement('img');
    if (i === 4 || i === 10 || i === 12 || i === 13)
        newImgCategory.src = `./images/orders/category/${store.categoryHebrew[i]}.webp`;
    else
        newImgCategory.src = `./images/orders/category/${store.categoryHebrew[i]}.svg`;
    newCategory.innerHTML = store.categoryHebrew[i];
    newCategory.href = `#${store.categoryEnglish[i]}`;
    newImgCategory.classList.add('categoryImage');
    newCategory.classList.add('newCategory');
    categoryDiv.append(newCategoryDiv);
    newCategoryDiv.append(newImgCategory, newCategory);
}
//סינון הסל רק המוצרים שהכמות שונה מאפס
const filter = (bag) => {
    return bag.filter(p => p.amount > 0);
}
//הפונקציה מחזירה את העגלה מהסטורג
const theCurrentBag = () => {
    const bag = sessionStorage.getItem('currentBag');
    if (!bag) {
        return [];
    }
    //החזרת הסל מפולטר
    return filter(JSON.parse(bag));
}
//הוספה לסל
const addToBag = (currentProduct, sign) => {
    //קבלת הסל הנוכחי מהסטורג
    const currentBag = theCurrentBag();
    if (currentBag.length === 0 || (currentBag.length === 1 && currentBag[0].amount === 0)) {
        console.log(currentBag.length);
    }
    //חיפוש קוד המוצר בעגלה
    const productInBag = currentBag.find((p) => p.currentProduct.code === currentProduct.code);
    //אם נמצא- הגדלת הכמות
    if (productInBag) {
        productInBag.amount += sign;
    }
    //לא נמצא- יצירת מוצר חדש
    else {
        const newProductInBag = {
            currentProduct,
            amount: 1
        };
        currentBag.push(newProductInBag);
    }
    //עידכון העגלה
    sessionStorage.setItem('currentBag', JSON.stringify(currentBag));
}

let isAddButton = false;
//הפונקציה יוצרת מוצר חדש ומחזירה אותו
const createProduct = (prod) => {
    const newProduct = document.createElement('div');
    //יצירת כל התגיות למוצר: שם, מחיר, תמונה, תיאור וכפתור להוספה
    const imgProduct = document.createElement('img');
    imgProduct.src = `./images/orders/${store.categoryEnglish[prod.category]}/${prod.name}.png`;
    const nameProduct = document.createElement('h1');
    nameProduct.innerHTML = prod.name;
    const priceProduct = document.createElement('h2');
    priceProduct.innerHTML = ` ₪${prod.price} `;
    const discreptionProduct = document.createElement('p');
    discreptionProduct.innerHTML = prod.description;
    const addProductButton = document.createElement('button');
    addProductButton.style.cursor = "pointer"
    addProductButton.innerHTML = ' הוספה ';
    const plusSpan = document.createElement('span');
    plusSpan.innerHTML = '+';
    addProductButton.append(plusSpan);
    addProductButton.onclick = () => {
        totalLink.style.display = 'block';
        isAddButton = true;
        addToBag(prod, 1);
        setBag();
    }
    //דחיפת כל התגיות לדיב של המוצר
    newProduct.append(imgProduct, nameProduct, priceProduct, discreptionProduct, addProductButton);
    //הוספת קלאס לכל מוצר
    newProduct.classList.add('eachProd');
    return newProduct;
}

//הגדלת המוצר בעת הלחיצה
const popupDialogProd = document.querySelector('#popupDialogProd');
const bigProduct = document.querySelector('#bigProduct');
const zoomProduct = (prod) => {
    //יצירת המוצר בגדול
    if (!isAddButton) {
        popupOpenProd();
        const product = createProduct(prod);
        product.classList.remove('eachProd');
        bigProduct.append(product);
    }
    isAddButton = false;
}

// הפונקציה מציגה את כל המוצרים
const setProducts = (products) => {
    prodDiv.innerHTML = "";
    categoryDiv.innerHTML = "";
    //מיון מערך המוצרים לפי קטגוריות
    sortByCategory();
    let i = 0;
    //מעבר על כל הקטגוריות
    for (let j = 0; j < store.categoryHebrew.length; j++) {
        //יצירת דיב לכל קטגוריה
        const divForEachCategory = document.createElement('div');
        //יצירת הכותרת ודחיפה לקטגוריה
        const titleCategory = document.createElement('h1');
        const imgOfTitle = document.createElement('img');
        if (j === 4 || j === 10 || j === 12 || j === 13)
            imgOfTitle.src = `./images/orders/category/${store.categoryHebrew[j]}.webp`;
        else
            imgOfTitle.src = `./images/orders/category/${store.categoryHebrew[j]}.svg`;
        // titleCategory.append(imgOfTitle);
        titleCategory.innerHTML = store.categoryHebrew[j];
        titleCategory.append(imgOfTitle);
        divForEachCategory.append(titleCategory);
        //יצירת דיב לכל המוצרים בקטגוריה
        const divForProductsInEachCategory = document.createElement('div');
        //מעבר על כל המוצרים אחרי הסינון והמיון
        for (; i < products.length && products[i].category === j; i++) {
            const newProduct = createProduct(products[i]);
            const currentProduct = products[i];
            newProduct.onclick = () => {
                zoomProduct(currentProduct);
            }
            //דחיפת המוצר לקטגוריה שלו
            divForProductsInEachCategory.append(newProduct);
        }
        //הוספת קלאס לדיב המוצרים לכל קטגוריה
        divForProductsInEachCategory.classList.add('divForProductsInEachCategory');
        //דחיפת הדיב של המוצרים לדיב הקטגוריה
        divForEachCategory.append(divForProductsInEachCategory);
        //הוספת קלאס לדיב הקטגוריה
        divForEachCategory.classList.add('divForEachCategory');
        divForEachCategory.id = store.categoryEnglish[j];
        if (divForProductsInEachCategory.innerHTML != '') {
            setCategory(j);
            //דחיפת הקטגוריה למוצרים
            prodDiv.append(divForEachCategory);
        }
    }
    //הצגת כמות המוצרים שנמצאו
    if (!i)
        numOfFound.innerHTML = `לא נמצאו מוצרים`;
    else
        numOfFound.innerHTML = `נמצאו ${i} מוצרים`;
}

//פונקציה שממינת את מערך המוצרים ע"פ קטגוריות
const sortByCategory = () => {
    store.products.sort((a, b) => a.category - b.category);
}

let isOpenSearch = false;
const searchButton = document.querySelector('#buttonSearch');
const searchInput = document.querySelector('#inputSearch');
//בעת לחיצה על חיפוש
searchButton.onclick = () => {
    //אם האינפוט סגור אז שיפתח אותו
    if (!isOpenSearch) {
        searchButton.src = './images/icons/x.jpg'
        searchInput.value = "";
        searchInput.classList.remove('searchInputClose');
        searchInput.classList.add('searchInputOpen');
        isOpenSearch = true;
    }
    //אם האינפוט פתוח אז שיסגור אותו
    else {
        searchButton.src = './images/icons/search.png'
        searchInput.classList.add('searchInputClose');
        searchInput.classList.remove('searchInputOpen');
        isOpenSearch = false;
        searchInput.value = "";
        setProducts(store.products);
    }
}
//הפונקציה מתרחשת כל שינוי בטקסט החיפוש
searchInput.oninput = () => {
    setProducts(filterProducts(store.products, searchInput.value));
}
//הפונציה מסננת את מערך המוצרים עפ טקסט סינון שנשלח
const filterProducts = (products, searchText) => {
    return products.filter(products => products.name.includes(searchText)
        || products.description.includes(searchText)
        || store.categoryHebrew[products.category].includes(searchText));
}