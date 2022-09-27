
// Define Products
let productsDom= document.querySelector(".product-container");
let badgeDom= document.querySelector(".badge");
let cardProducts= document.querySelector(".cardPU"); // cards added to popup
let itemCount = 0;


let products=[
{
    id:1,
    title: "brand1",
    price: "20$",
    imageUrl: "img/s1.jpg"

},
{
    id:2,
    title: "brand2",
    price: "20$",
    imageUrl: "img/s2.jpg"

},
{
    id:3,
    title: "brand3",
    price: "20$",
    imageUrl: "img/s3.jpg"

},
{
    id:4,
    title: "brand4",
    price: "20$",
    imageUrl: "img/s4.jpg"

},
{
    id:5,
    title: "brand5",
    price: "20$",
    imageUrl: "img/s5.jpg"

},
{
    id:6,
    title: "brand6",
    price: "20$",
    imageUrl: "img/s6.jpg"

},
{
    id:7,
    title: "brand7",
    price: "20$",
    imageUrl: "img/sun3.jpg"

},
{
    id:8,
    title: "brand8",
    price: "20$",
    imageUrl: "img/sunnnn.jpg"

},
{
    id:9,
    title: "brand9",
    price: "20$",
    imageUrl: "img/sun1.jpg"

},
{
    id:10,
    title: "brand10",
    price: "20$",
    imageUrl: "img/sun4.jpg"

},
{
    id:11,
    title: "brand11",
    price: "20$",
    imageUrl: "img/sun5.jpg"

},
{
    id:12,
    title: "brand12",
    price: "20$",
    imageUrl: "img/sun6.jpg"

}
];

function drawProductsUI(){
    let productsUI= products.map((item) =>{
return `
       <div class="product-card" >
         <div class="product-image">
             <span class="discount-tag">50% off</span>
             <img
              src="${item.imageUrl}"  
              class="product-thumb" alt="">
             <button class="card-btn" onclick=" addedToCart(${item.id})">add to whislist</button>
         </div>
         <div class="product-info">
            <h2 class="product-brand">"${item.title}"</h2>
            <p class="product-short-des">a short line about the cloth..</p>
            <span class="price">"${item.price}"</span><span class="actual-price">$40</span>
         </div>
     </div>

`;
    });
    productsDom.innerHTML=productsUI;
}
drawProductsUI();







// which cart you clicked add to wishlist
function addedToCart(id){
 //console.log(id);

let clickedItem = products.find( (item) => item.id === id);
//console.log(clickedItem);

cardProducts.innerHTML += `
<div class="product-card" >
<div class="product-image">
    <span class="discount-tag">50% off</span>
    <img
     src="${clickedItem.imageUrl}"  
     class="product-thumb" alt="">
</div>
<div class="product-info">
   <h2 class="product-brand">"${clickedItem.title}"</h2>
   <p class="product-short-des">a short line about the cloth..</p>
   <span class="price">"${clickedItem.price}"</span><span class="actual-price">$40</span>
   <button style="background-color: red;">Show All Products</button>
</div>
</div>

`
console.log(cardProducts)

let cardProductsItems= document.querySelectorAll(".cardPU p");
//badgeDom.style.display = "block";
//badgeDom.innerHTML=cardProductsItems.itemCount;
//console.log(cardProductsItems.length);
badgeDom.innerHTML=itemCount;

};


/*function openPopUp(){
    if(cardProducts.innerHTML !=""){
        if(cardProducts.style.display == "block"){
            cardProducts.style.display="none";
        }
        else{
            cardProducts.style.display= "block";
        }
      
    }
    
}
badgeDom.addEventListener("click" ,  openPopUp() ); */
