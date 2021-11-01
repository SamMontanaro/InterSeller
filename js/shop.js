"use strict";

window.addEventListener('load', function(){
    var categories = document.getElementsByClassName("list-group-item");
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        category.addEventListener("click", function(){
            var categoryHeading = document.getElementById("activeCategoryHeading");
            categoryHeading.innerText = this.innerText;
    
            var KeplerPlanets = document.getElementsByClassName("KeplerSeries");
            var K2Planets = document.getElementsByClassName("K2Series");
            var WaspPlanets = document.getElementsByClassName("WaspSeries");
            if (this.innerText == "Kepler Series") {
                for (var i = 0; i < KeplerPlanets.length; i++) {
                    var card = KeplerPlanets[i];
                    card.style.display = "block";
                }
                for (var i = 0; i < K2Planets.length; i++) {
                    var card = K2Planets[i];
                    card.style.display = "none";
                }
                for (var i = 0; i < WaspPlanets.length; i++) {
                    var card = WaspPlanets[i];
                    card.style.display = "none";
                }
            }
            else if (this.innerText == "K2 Series") {
                for (var i = 0; i < KeplerPlanets.length; i++) {
                    var card = KeplerPlanets[i];
                    card.style.display = "none";
                }
                for (var i = 0; i < K2Planets.length; i++) {
                    var card = K2Planets[i];
                    card.style.display = "block";
                }
                for (var i = 0; i < WaspPlanets.length; i++) {
                    var card = WaspPlanets[i];
                    card.style.display = "none";
                }
            }
            else if (this.innerText == "WASP Series") {
                for (var i = 0; i < KeplerPlanets.length; i++) {
                    var card = KeplerPlanets[i];
                    card.style.display = "none";
                }
                for (var i = 0; i < K2Planets.length; i++) {
                    var card = K2Planets[i];
                    card.style.display = "none";
                }
                for (var i = 0; i < WaspPlanets.length; i++) {
                    var card = WaspPlanets[i];
                    card.style.display = "block";
                }
            }
            else {
                for (var i = 0; i < KeplerPlanets.length; i++) {
                    var card = KeplerPlanets[i];
                    card.style.display = "block";
                }
                for (var i = 0; i < K2Planets.length; i++) {
                    var card = K2Planets[i];
                    card.style.display = "block";
                }
                for (var i = 0; i < WaspPlanets.length; i++) {
                    var card = WaspPlanets[i];
                    card.style.display = "block";
                }
            }
    
            var previous = document.getElementById("activeCategory");
            previous.classList.remove("bg-dark");
            previous.classList.remove("text-white");
            previous.removeAttribute('id');
            previous.removeAttribute('aria-current');
            this.classList.add("bg-dark");
            this.classList.add("text-white");
            this.id = "activeCategory";
            this.setAttribute("aria-current", "true");
        });
    }
})