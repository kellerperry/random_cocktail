const randomNum = (num) => {
    return Math.floor(Math.random() * num);
}


let todaysCocktailRecipe = [];

const cocktailRecipes = {
    spirit: ['whiskey', 'vodka', 'rum', 'tequila'],
    citrus: ['lemon', 'lime', 'orange'],
    bitters: ['Angostura', 'Orange', "Peychaud's"],
    sweetner: ['Simple Syrup', 'Agave', 'no sweetener']
}

todaysCocktailRecipe.push(`For today's cocktail, try ${cocktailRecipes.spirit[randomNum(cocktailRecipes.spirit.length)]} with ${cocktailRecipes.citrus[randomNum(cocktailRecipes.citrus.length)]}. Add ${cocktailRecipes.bitters[randomNum(cocktailRecipes.bitters.length)]} bitters with ${cocktailRecipes.sweetner[randomNum(cocktailRecipes.sweetner.length)]}`);

/* with ${cocktailRecipes[ingredient][ingredientSelection]}. Add ${cocktailRecipes[ingredient][ingredientSelection]} bitters with ${cocktailRecipes[ingredient][ingredientSelection]}`) */


/*
for(let ingredient in cocktailRecipes) {
    let ingredientSelection = randomNum(cocktailRecipes[ingredient].length);
    
    todaysCocktailRecipe.push(`For today's cocktail, try ${cocktailRecipes[ingredient][ingredientSelection]} with ${cocktailRecipes[ingredient][ingredientSelection]}. Add ${cocktailRecipes[ingredient][ingredientSelection]} bitters with ${cocktailRecipes[ingredient][ingredientSelection]}` )
} */

console.log(todaysCocktailRecipe);