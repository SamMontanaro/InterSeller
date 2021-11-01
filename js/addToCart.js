"use strict";

window.addEventListener('load', function(){
    var name = (document.getElementsByClassName("planet-name")[0].innerText).replace("-", "");
    var price = document.getElementsByClassName("planet-price")[0].innerHTML;

    var btn = document.getElementsByClassName("add-to-cart")[0];
    btn.addEventListener("click", function(){
        const items = function(){
            const currentCart = localStorage.getItem('cart');
            if (currentCart === null) {
                return [];
            }
            else {
                return JSON.parse(currentCart);
            }
        }();
        
        var alreadyInItems = 0;

        for (var i = 0; i < items.length; i++) {
            if (items[i].name == name)
                alreadyInItems = 1;
        }

        if (!alreadyInItems) {
            var navLinks = document.getElementsByClassName("nav-link");
            var cartLink = navLinks[navLinks.length - 1];
            var amtInCart = JSON.parse(localStorage.getItem("cart"));

            items.push({"name": name, "price": price});
            localStorage.setItem("cart", JSON.stringify(items));
            alreadyInItems = 1;
            amtInCart = JSON.parse(localStorage.getItem("cart"));
            if (amtInCart !== null)
                cartLink.innerHTML = "<i class='fas fa-shopping-cart'></i>" + " Cart (" + amtInCart.length + ")";
        }
        else {
            var modal = new bootstrap.Modal(document.getElementById("alreadyAddedModal"));
            modal.show();
        }
    });
})