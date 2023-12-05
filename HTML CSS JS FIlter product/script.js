let products = {
  data: [
    {
      productName: 'Funko Pop',
      category: 'Funko',
      price: '30',
      image: './assets/images/blue.png',
    },
    {
      productName: 'Funko Pop',
      category: 'Funko',
      price: '30',
      image: './assets/images/vader.png',
    },
    {
      productName: 'Pad Xbox',
      category: 'Game',
      price: '30',
      image: './assets/images/pad.jpg',
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement('div');
  card.classList.add('card', i.category, 'hide');
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement('div');
  container.classList.add('container');
  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  card.appendChild(container);
  let price = document.createElement('h6');
  price.innerText = '$' + i.price;
  container.appendChild(price);
  document.getElementById('products').appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  let elements = document.querySelectorAll('.card');
  elements.forEach((element) => {
    if (value === 'All' || element.classList.contains(value)) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  });
}

document.getElementById('search').addEventListener('click', () => {
  let searchInput = document.getElementById('search-input').value;
  let elements = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.card');

  elements.forEach((element, index) => {
    if (searchInput === '' || element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove('hide');
    } else {
      cards[index].classList.add('hide');
    }
  });
});

window.onload = () => {
  filterProduct('All');
};
