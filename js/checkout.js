"use strict";

window.addEventListener("load", function(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    let orderValue = document.getElementById("order-value");
    let shipping = document.getElementById("shipping-cost");
    let total = document.getElementById("total-price");
    let price = 0;

    let loginPortalButton = document.getElementById("loginButton");
    loginPortalButton.addEventListener("click", function(){
        let modal = new bootstrap.Modal(document.getElementById("loginPortalDown"));
        modal.show();
    })

    if (cart !== null && cart.length !== 0) {
        for (let i = 0; i < cart.length; i++) {
            price += parseInt((cart[i].price).replace("$", "").split(',').join(''));
        }
    
        price = "$" + price.toLocaleString();

        orderValue.innerText = "Order Value: " + price + ".00";
        shipping.innerText = "Shipping: FREE";
        total.innerText = "Total: " + price + ".00";
    }
    else {
        window.location.replace("cart.html");
    }
})