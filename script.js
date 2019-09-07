window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
    xhr.send();
    xhr.onload = function() {
        resp = xhr.response;
        drinks = JSON.parse(resp);
        createCharCard(drinks);
        console.log(drinks);
    }
}

    function createCharCard(drinks) {
        for(i = 0; i < 250; i++) {
            var card_div = document.createElement("div");
            card_div.setAttribute("class", "card col-lg-4 align-middle");
    
            var img = document.createElement("img");
            img.setAttribute("class", "card-img img-fluid");
            img.setAttribute("src", drinks["drinks"][i].strDrinkThumb);
            card_div.appendChild(img);
    
            var div = document.createElement("div");
            div.setAttribute("class", "card body");
    
            var h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title");
            h4.textContent = drinks["drinks"][i].strDrink;
            div.appendChild(h4);
    
            var p = document.createElement("p");
            p.setAttribute("class", "card-text");
            p.textContent = drinks["drinks"][i].idDrink;
            div.appendChild(p);
            
            card_div.append(div);
            $('.row').append(card_div);
        }
    }


    