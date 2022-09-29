const PRODUCTS_DATA = [
  {
    id: "Glass_1",
    name: "Silver framed",
    price: "14500",
    description: "Glasses",
    imageURL:
      "https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Glasses",
  },
  {
    id: "Glass_2",
    name: "Cropped shot ",
    price: "12000",
    description: "Glasses",
    imageURL:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Glasses",
  },
  {
    id: "Glass_3",
    name: "levitating eye glasses",
    price: "9800",
    description: "Glasses",
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Glasses",
  },
  {
    id: "Glass_4",
    name: "Gold colerd",
    price: "8500",
    description: "Glasses",
    imageURL:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Glasses",
  },

  {
    id: "Pant_1",
    name: "Blue denim jeans ",
    price: "7800",
    description: "jeans",
    imageURL:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
  },
  {
    id: "Pant_2",
    name: "Oregen pants",
    price: "5666",
    description: " pants",
    imageURL:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
  },
  {
    id: "Pant_3",
    name: "acer",
    price: "4999",
    description: "acer",
    imageURL:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
  },

  {
    id: "Pant_4",
    name: "Pearson wears",
    price: "4999",
    description: "Pant",
    imageURL:
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
  },
  {
    id: "Accessory_1",
    name: "Gold and silver beaded ",
    price: "7800",
    description: "beaded",
    imageURL:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
  },
  {
    id: "Accessory_2",
    name: "Blue stone",
    price: "5666",
    description: " stone",
    imageURL:
      "https://images.unsplash.com/photo-1613843351058-1dd06fda7c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
  },
  {
    id: "Accessory_3",
    name: "clear glass fragrance",
    price: "4999",
    description: "fragrance",
    imageURL:
      "https://images.unsplash.com/photo-1551533257-bbd74dff1f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
  },

  {
    id: "Accessory_4",
    name: "Red leather handbag",
    price: "4999",
    description: "handbag",
    imageURL:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
  },
];


function storeCart() {

  let cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";
  let CART = JSON.parse(localStorage.getItem("cartIitems"));
  let indexrr = [];
  let countArr = [];


  for (let i = 0; i < PRODUCTS_DATA.length; i++) {
    for (let j = 0; j < CART.length; j++) {
      if (CART[j].id == PRODUCTS_DATA[i].id) {
        indexrr.push(i);
        PRODUCTS_DATA[i].count = CART[j].count;
        PRODUCTS_DATA[i].cartID = j;

      }


    }
  }


  indexrr.forEach((item, index) => {
    cartContainer.innerHTML += `
			<div class="cart-product-item">
			<div class="cart-prod-image">
				<img src="${PRODUCTS_DATA[item].imageURL}"   alt="prod-image">
			</div>
			<div class="cart-prod-data" >
				<span id="cart-prod-title">${PRODUCTS_DATA[item].name}</span>
				<span id="cart-prod-price">$ ${PRODUCTS_DATA[item].price * PRODUCTS_DATA[item].count}</span>
				<span class="edit-quant"><button class="edit-count-btn" onClick="removeByOne('${PRODUCTS_DATA[item].cartID}')"><i class="material-icons">remove</i></button><input type="text" name="quantity" id="quantity" class="quant-input" value="${PRODUCTS_DATA[item].count}" readonly><button class="edit-count-btn" onClick="addByOne('${PRODUCTS_DATA[item].cartID}')"><i class="material-icons">add</i></button></span>
			</div>
			<form action="javascript:removeFromCart('${index}')" class="remove-cart-btn">
							<button class="delete-btn" id="remove-from-cart" type="submit"><i class="material-icons">delete</i></button>
						</form>
		</div>
		<div class="vertical-space"></div>
			`;
  });
}

function removeByOne(index) {
  let CART = JSON.parse(localStorage.getItem("cartIitems"));
  CART[+index].count === 1 ? CART.splice(index, 1) : CART[+index].count--;
  localStorage.setItem("cartIitems", JSON.stringify(CART));
  storeCart();

  if (document.querySelector('.quant-input').value > '1')
    document.querySelector('.quant-input').value--;

}

function addByOne(index) {
  let CART = JSON.parse(localStorage.getItem("cartIitems"));
  console.log(index);
  CART[+index].count++;
  localStorage.setItem("cartIitems", JSON.stringify(CART));
  storeCart();


}

function removeFromCart(index) {
  let CART = JSON.parse(localStorage.getItem("cartIitems"));
  CART.splice(index, 1);
  localStorage.setItem("cartIitems", JSON.stringify(CART));
  window.location.reload();


}
