fetch("http://localhost:8088/favoritefoods")
.then(foods => foods.json())
.then(parsedFoods => {

    fetch("https://world.openfoodfacts.org/api/v0/product/0011150479547.json")
    .then(response => response.json())
    .then(productInfo => {
        let ingredientsList = "";
        for (i = 0; i < 5; i++){
            ingredientsList += `${productInfo.product.ingredients[i].text}`
        }
        parsedFoods.forEach(food => {
            document.querySelector("#foodList").innerHTML +=
           `<h3>${food.name}</h3>
           <p>${food.category}</p>
           <p>${food.ethnicity}</p>
           <p>${ingredientsList}`
        // Use it here
    });
    });
})