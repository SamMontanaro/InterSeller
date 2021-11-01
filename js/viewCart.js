"use strict";

var totalPrice = 0
var orderValue = document.getElementById("order-value");
var shipping = document.getElementById("shipping-cost");
var total = document.getElementById("total-price");

window.addEventListener("load", function(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    
    let loginPortalButton = document.getElementById("loginButton");
    loginPortalButton.addEventListener("click", function(){
        var modal = new bootstrap.Modal(document.getElementById("loginPortalDown"));
        modal.show();
    })

    if (cart !== null && cart.length !== 0) {
        for (let i = 0; i < cart.length; i++) {
            createCartItem(cart[i], i);
            totalPrice += parseInt((cart[i].price).replace("$", "").split(',').join(''));
        }
    
        totalPrice = "$" + totalPrice.toLocaleString();

        orderValue.innerText = "Order Value: " + totalPrice + ".00";
        shipping.innerText = "Shipping: FREE";
        total.innerText = "Total: " + totalPrice + ".00";
    }
    else {
        orderValue.innerText = "Order Value: $0.00";
        shipping.innerText = "Shipping: FREE";
        total.innerText = "Total: $0.00"

        document.getElementById("checkoutButton").classList.add("disabled");
        document.getElementById("emptyCart").style.display = "block";

        let loginPortalLink = document.getElementById("signInLink");
        loginPortalLink.addEventListener("click", function(){
            var modal = new bootstrap.Modal(document.getElementById("loginPortalDown"));
            modal.show();
        })
    }

    let cartPlaceholder = document.getElementById("cartPlaceholder");
    cartPlaceholder.innerHTML = "";
    cartPlaceholder.remove();
});

function createCartItem(item, position) {
    var formattedName = item.name;
    formattedName = formattedName.replace("Kepler", "Kepler-");
    formattedName = formattedName.replace("K2", "K2-");
    formattedName = formattedName.replace("Wasp", "Wasp-");

    var outerRow = document.createElement("div");
    outerRow.classList.add("row", "p-3", "pb-0");
    
    var outer12Col = document.createElement("div");
    outer12Col.classList.add("col-12", "d-flex", "justify-content-evenly", "align-items-center");

    var cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card", "mb-3", "me-auto");

    var innerRow = document.createElement("div");
    innerRow.classList.add("row", "g-0");

    var inner4Col = document.createElement("div");
    inner4Col.classList.add("col-6", "col-md-4");

    var cartItemImg = document.createElement("img");
    cartItemImg.src = "images/" + item.name + ".jpg";
    cartItemImg.classList.add("img-fluid", "p-2", "p-md-3");

    var inner8Col = document.createElement("div");
    inner8Col.classList.add("col-6", "col-md-8");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "py-2", "py-md-3", "pb-0", "px-2", "px-md-3", "h-75");

    var cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = formattedName;

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = "Price: " + item.price;

    var removeBtnWrapper = document.createElement("div");
    removeBtnWrapper.classList.add("d-flex", "justify-content-center", "align-items-end", "h-25", "py-2", "py-md-3", "pe-2", "pe-md-3", "ps-2", "ps-md-3");

    var removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "w-100");
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    removeBtnWrapper.appendChild(removeBtn);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    inner4Col.appendChild(cartItemImg);
    inner8Col.appendChild(cardBody);
    inner8Col.appendChild(removeBtnWrapper);

    innerRow.appendChild(inner4Col);
    innerRow.appendChild(inner8Col);

    cardWrapper.appendChild(innerRow);
    outer12Col.appendChild(cardWrapper);
    outerRow.appendChild(outer12Col);

    removeBtn.addEventListener("click", function(){
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart = cart.filter(function(index){
            return index.name !== item.name;
        })
        localStorage.setItem("cart", JSON.stringify(cart));

        outerRow.innerHTML = "";
        outerRow.remove();

        totalPrice = parseInt((totalPrice).replace("$", "").split(',').join(''))
        totalPrice -= parseInt((item.price).replace("$", "").split(',').join(''));

        totalPrice = "$" + totalPrice.toLocaleString();

        orderValue.innerText = "Order Value: " + totalPrice + ".00";
        total.innerText = "Total: " + totalPrice + ".00";

        let navLinks = document.getElementsByClassName("nav-link");
        let cartLink = navLinks[navLinks.length - 1];
        cartLink.innerHTML = "<i class='fas fa-shopping-cart'></i>" + " Cart (" + cart.length + ")";

        if (cart.length === 0) {
            document.getElementById("checkoutButton").classList.add("disabled");
            document.getElementById("emptyCart").style.display = "block";

            let loginPortalLink = document.getElementById("signInLink");
            loginPortalLink.addEventListener("click", function(){
                let modal = new bootstrap.Modal(document.getElementById("loginPortalDown"));
                modal.show();
            })
        }
    })

    var cartItems = document.getElementById("cartItems");
    cartItems.appendChild(outerRow);
}