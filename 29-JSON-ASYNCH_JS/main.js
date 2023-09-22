async function fetchShopItems(api) {
  const response = await fetch(api);
  const data = await response.json();

  return data;
}

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("shop-item");

    listItem.innerHTML = `
          <img src=${shopItem.thumbnail} />
          <h2>${shopItem.title}</h2>
          <p>Price: ${shopItem.price}</p>
          <p>${shopItem.description}</p>
      `;

    shoppingList.appendChild(listItem);
  });
}

window.addEventListener("load", async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  renderShopItems(shopItems.products);
});
