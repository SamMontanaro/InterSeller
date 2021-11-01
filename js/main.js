"use strict";

window.addEventListener('load', function(){
    var navLinks = document.getElementsByClassName("nav-link");
    var cartLink = navLinks[navLinks.length - 1];
    var amtInCart = JSON.parse(localStorage.getItem("cart"));
    if (amtInCart !== null)
        cartLink.innerHTML = "<i class='fas fa-shopping-cart'></i>" + " Cart (" + amtInCart.length + ")";

    var anchors = document.getElementsByClassName("nav-link");
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.addEventListener("click", function(){
            var previous = document.getElementsByClassName("nav-link active");
            previous[0].classList.remove("active");
            this.classList.add("active");
        });
    }
})