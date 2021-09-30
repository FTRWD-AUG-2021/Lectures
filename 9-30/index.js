const axios = require('axios')
const fs = require('fs');

const promises = []
for (let j = 11000; j < 17000; j++) {
    promises.push(
        axios
            //.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${j}`)
            .then(res => {
                if (!res.data.drinks) {
                    // countinue
                    return null
                }
                let drink = res.data.drinks[0]
                let ingredients = []
                let measurements = []
                for (let i = 1; i < 15; i++) {
                    if (drink[`strIngredient${i}`]) {
                        ingredients.push(drink[`strIngredient${i}`])
                    }
                    if (drink[`strMeasure${i}`]) {
                        measurements.push(drink[`strMeasure${i}`])
                    }
                }

                let cocktail = {
                    cockTailId: drink.idDrink,
                    name: drink.strDrink,
                    tags: drink.strTags ? drink.strTags.split(',') : [],
                    instructions: drink.strInstructions,
                    image: drink.strDrinkThumb,
                    otherImage: drink.strImageSource,
                    ingredients: ingredients,
                    measurements: measurements
                }
                // console.log(cocktail)
                return cocktail
            }).catch(err => console.error(err))
    )

}

Promise.all(promises).then(cocktails => {
    let filteredCocktails = cocktails.filter(eachCocktail => eachCocktail)
    let data = JSON.stringify(filteredCocktails);
    console.log(data, 'data')
    fs.writeFileSync('cocktails.json', data);

})

// let data = JSON.stringify(cocktails);
// console.log(data)
// fs.writeFileSync('cocktails.json', data);
