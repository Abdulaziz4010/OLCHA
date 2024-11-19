import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: "4000",
  },

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },

  // And if we need scrollbar
});



const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 10, // Har safar ko'rinadigan slaydlar soni
  spaceBetween: 20,
  // autoplay: {
  //   delay: "2000",
  // },

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn__next2',
    prevEl: '.btn__prev2',
  },

  // And if we need scrollbar
});




// soat

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  setTimeout(updateClock, 1000);
}

updateClock();

// 


const productsWrapper = document.querySelector(".products__wrapper")

const GET_PRODUCTS = "http://localhost:5000"

// API

fetchProducts()

async function fetchProducts() {

  return fetch(`${GET_PRODUCTS}/products`).then((res) => res.json()).then((data) => createProductCard(data.data))
}
async function createProductCard(data) {
  const cards = document.querySelector(".products__cards");
  cards.innerHTML = data?.map((card) => (
    `<div class="products__cards__card">
          <div class="products__cards__card__img">
              <img src="${card.image}" alt="">
          </div>
          <div class="products__cards__card__desc">
              <h2>${card.name && card.name.length > 20 ? card.name.slice(0, 20) + "..." : card.name}</h2>
              <p>${card.price}</p>
          </div>
          <div class="products__cards__card-btn">
              <button class="products__cards__card__btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="products__cards__card__btns">Muddatli to'lov</button>
          </div>
      </div>`
  )).join("");

  const karzinaBtns = document.querySelectorAll(".products__cards__card__btn");

  karzinaBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => saveLocal(data[index]));
  });
}

function saveLocal(product) {
  console.log("Mahsulot saqlandi:", product);

  let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
  localStorage.setItem("products", JSON.stringify([...savedProducts, { ...product, total: 1 }]));

}

