
let products = [
  {name:"Kit Kat Strawberry Cake", image:"kit-kat-strawberry-reduced.jpg", price:85},
  {name:"Carrot Cherry Cake", image:"carrot-cake-cherry-reduced.jpg", price:65},
  {name:"Kinder Bueno White Chocolate Cake", image:"kinder-bueno-white-chocolate-reduced.jpg", price:75},
  {name:"Princess Cake", image:"princess-cake-reduced.jpg", price:45},
  {name:"Kit Kat Strawberry Cake", image:"kit-kat-strawberry-reduced.jpg", price:85},
  {name:"Carrot Cherry Cake", image:"carrot-cake-cherry-reduced.jpg", price:65},
  {name:"Kinder Bueno White Chocolate Cake", image:"kinder-bueno-white-chocolate-reduced.jpg", price:75},
  {name:"Princess Cake", image:"princess-cake-reduced.jpg", price:45},
  {name:"Kit Kat Strawberry Cake", image:"kit-kat-strawberry-reduced.jpg", price:85},
];

let cart = []


function load() {
  products.forEach((i, index)=> {
      
      let item = document.createElement('div');
      item.innerHTML = `
      <div class="product">
      <img src="images/${i.image}">
      <p class="name">${i.name}</p>
      <p class="price">£${i.price}</p>
      <button class="add">Add to cart</button>
      </div>
      `
      const items = document.getElementById('items');

      item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
          addTocart(index)
      });

      items.append(item)
  });
}

load();

function addTocart(index){
  cart.push(index) /*We have to pass this array as a string */
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(`${products[index].name} added to cart`)
}

// /*Target all the products*/
// let carts = document.querySelectorAll('.add-cart');

// /*Every time button add to cart is clicked we want to do something
// We gonna loop through all of them. Our cart now has a lengh of 9, so it will go from 0 to 8*/
// for (let i=0; i < carts.length; i++) {
//   console.log("my loop")
//   /*I grab all my carts based on this formula, i will go from 0 to 8*/
//   carts[i].addEventListener('click', () => {
//     console.log("added to cart")
//     cartNumbers();
//   })
// }

// /*To know how many items are added to the cart, even if we refresh they will be remembered */
// function cartNumbers() {
//   let productNumbers = localStorage.getItem('cartNumbers');
//   console.log(productNumbers);
//   console.log(typeof productsNumbers);

//   /*To convert number to a string */
//   productNumbers = parseInt(productNumbers);
//   console.log(typeof productsNumbers);
//   localStorage.setItem('cartNumbers', 1);
// }