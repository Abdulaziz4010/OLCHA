const main = document.querySelector(".main__item");

const localData = JSON.parse(localStorage.getItem("products")) || [];

main.innerHTML = localData
  ?.map(
    (item) => `
      <div class="main__cards">
          <h1>Savatchada ${localData.length} mahsulot bor</h1>
          <div class="main__card">
            <div class="main__card__left">
              <img src=${item.image} alt="">
              <span>
                <p>${item.name}</p>
                <p>${item.price}</p>
              </span>
            </div>

            <div class="main__card__right">
              <span>
                <button class="minus" onclick="minus(${item.id})">-</button> 
                <p>${item.total}</p>  
                <button class="plus" onclick="plus(${item.id})">+</button>
              </span>
              <p>${item.price * item.total}</p>
            </div>
          </div>
      </div>`
  )
  .join(""); 
function minus(id) {
  const newObj = localData.find((item) => item.id == id);
  if (newObj.total > 0) {
    newObj.total -= 1;
  }
  updateLocalStorageAndUI();
}

function plus(id) {
  const newObj = localData.find((item) => item.id == id);
  newObj.total += 1;
  updateLocalStorageAndUI();
}

function updateLocalStorageAndUI() {
  localStorage.setItem("products", JSON.stringify(localData));
  main.innerHTML = localData
    ?.map(
      (item) => `
        <div class="main__cards">
            <h1>Savatchada ${localData.length} mahsulot bor</h1>
            <div class="main__card">
              <div class="main__card__left">
                <img src=${item.image} alt="">
                <span>
                  <p>${item.name}</p>
                  <p>${item.price}</p>
                </span>
              </div>

              <div class="main__card__right">
                <span>
                  <button onclick="minus(${item.id})">-</button> 
                  <p>${item.total}</p>  
                  <button onclick="plus(${item.id})">+</button>
                </span>
                <p>${item.price * item.total}</p>
              </div>
            </div>
        </div>`
    )
    .join(""); // Join to avoid commas in the output
}
