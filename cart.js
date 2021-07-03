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
        /*We need to give cart its data - This will get the cart data from the local storage*/
        /*We stringify the items before we send them to the local storage, now we parse them so they can turn back into an array*/
  const cartData = localStorage.getItem('cart');
  cart = JSON.parse(cartData)

  cart.forEach((i)=> { /*Here we will look for the cart */
      /*products[i] it will go into the products array and by the index we saves in the cart array, and then the coorespondent object*/
      let item = document.createElement('div');
      item.innerHTML = `
      <div class="product">
      <img src="images/${products[i].image}">
      <p class="name">${products[i].name}</p>
      <p class="price">£${products[i].price}</p>
      <button class="remove">Remove</button>
      </div>
      `
      const items = document.getElementById('items');

      item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
          remove(i, e)
      });

      items.append(item)
  });
  tot();
}

load();

function tot(){
  let total = 0;
/*Creating local variable, no global, and initialise it with 0*/
  cart.forEach((i)=> {
    total += products[i].price
  });
  document.getElementById('total').innerText = total;
}

/*We have to pass this array as a string */
function remove(i, e){
  for (let j = 0; j < cart.length; j++) {
    if(cart[j] === i){
      cart.splice(j, 1)

    }
    
  } 
  localStorage.setItem('cart', JSON.stringify(cart))

  e.target.parentElement.remove();
  tot();
  alert(`${products[i].name} removed from cart`)
}
/*This is removing the date from the array but not from the HTML - then we need to pass an (e) inside when 'click'*/
/*We are targetting the button because is the one that has the event listener, then removing its parent element
which is the 'products' div */