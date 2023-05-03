const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
  navMenu.classList.toggle("show-menu");
});
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Please enter your message.");
    messageInput.focus();
    return;
  }
  else{
    alert("Thanks for submission. We will contact soon..");
  }

});



// Get all the checkboxes
const checkboxes = document.querySelectorAll('input[name="menu[]"]');
const totalPriceBox = document.getElementById('totalPrice')

// Add a change event listener to each checkbox
let totalPrice = 0;
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Get the total price
   
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        // Add the price of the checked checkbox to the total
        const price = parseInt(checkbox.nextElementSibling.value);
        totalPrice += price;
      }
    });

    // Output the total price to the console
    console.log(totalPrice);
    totalPriceBox.value = totalPrice;
  });

 
});

const orderBtn = document.getElementById("order-btn");
const orderAlert = document.getElementById("order-alert");
orderBtn.addEventListener("click", () => {
  window.alert(`Your order completed successfully. Total price: ${totalPrice}`);
  orderAlert.classList.remove("d-none");
});
