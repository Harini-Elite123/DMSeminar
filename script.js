let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

function updateCart(){
document.getElementById("cart-count").innerText = cart.length;

let cartItems = document.getElementById("cart-items");
let total = 0;
cartItems.innerHTML = "";

cart.forEach((item,index)=>{
total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<span>${item.name}</span>
<span>₹${item.price}</span>
<button onclick="removeItem(${index})">X</button>
</div>
`;
});

document.getElementById("total").innerText = total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

function clearCart(){
cart=[];
localStorage.removeItem("cart");
updateCart();
}

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}
// ===== CART SYSTEM (Clean Version) =====

// LocalStorage-la irundha count eduthukum
let cartCount = localStorage.getItem("cartCount");

if(cartCount === null){
  cartCount = 0;
} else {
  cartCount = parseInt(cartCount);
}

// Page load aagumbothu cart update
document.getElementById("cart-count").textContent = cartCount;


// Add to Cart Buttons
const addButtons = document.querySelectorAll(".card button");

addButtons.forEach(button => {
  button.addEventListener("click", () => {

    cartCount++;

    // Save in localStorage
    localStorage.setItem("cartCount", cartCount);

    // Update display
    document.getElementById("cart-count").textContent = cartCount;

    // Button animation effect
    button.innerText = "Added ✓";
    button.style.background = "#4CAF50";

    setTimeout(() => {
      button.innerText = "Add to Cart";
      button.style.background = "#ff3f6c";
    }, 1200);

  });
});