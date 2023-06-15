// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'Suculant',
    image: 'https://i.postimg.cc/zGC0bmfs/chinese-evergreen-plant-aglaonema-shutterstock-com-15962.jpg',
    price: 120000,
    category: 'Category A',
  },
  {
    id: 2,
    name: 'Sucuulant',
    image: 'https://i.postimg.cc/qRmZHpKD/hiding-behind-plant.jpg',
    price: 120000,
    category: 'Category B',
  },
  {
    id: 3,
    name: 'PRODUCT NAME 3',
    image: 'https://i.postimg.cc/c6y3sj7T/3604285458.jpg',
    price: 220000,
    category: 'Category A',
  },
  {
    id: 4,
    name: 'PRODUCT NAME 4',
    image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
    price: 123000,
    category: 'Category C',
  },
  {
    id: 5,
    name: 'PRODUCT NAME 5',
    image: '5.PNG',
    price: 320000,
    category: 'Category B',
  },
  {
    id: 6,
    name: 'PRODUCT NAME 6',
    image: '6.PNG',
    price: 120000,
    category: 'Category C',
  },
];
let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;

  // Save the updated listCards array to local storage
  saveToLocalStorage();
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

function saveToLocalStorage() {
  localStorage.setItem('listCards', JSON.stringify(listCards));
}

function sortProductsByCategory() {
  products.sort((a, b) => {
    return a.category.localeCompare(b.category);
  });

  // Update the displayed list of products
  initApp();
}

function initAppWithLocalStorage() {
  // Retrieve data from local storage
  const storedListCards = localStorage.getItem('listCards');
  if (storedListCards) {
    listCards = JSON.parse(storedListCards);
  }

  // Initialize the app
  initApp();

  // Reload the card to display the saved data
  reloadCard();
}

initAppWithLocalStorage();