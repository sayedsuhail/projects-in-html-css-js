const API_KEY = "d511885d1a374543a022141b815652fa"

const recipesListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
  recipesListEl.innerHTML = ""

  recipes.forEach((recipe) => {
    // li element
    const recipeItemEl = document.createElement("li")
    recipeItemEl.classList.add("recipe-item")

    // img in li
    const recipeImageEl = document.createElement("img")
    recipeImageEl.src = recipe.image
    recipeImageEl.alt = "recipe-img"
    recipeItemEl.appendChild(recipeImageEl)

    // title (h2) in li
    const recipeTitleEl = document.createElement("h2")
    recipeTitleEl.innerText = recipe.title
    recipeItemEl.appendChild(recipeTitleEl)

    // Ingredients (p) in li
    const recipeIngredientsEl = document.createElement("p")
    recipeIngredientsEl.innerHTML = `
      <strong>Ingredients: </strong> ${recipe.extendedIngredients
        .map((Ingredient) => Ingredient.original)
        .join(", ")}
    `
    recipeItemEl.appendChild(recipeIngredientsEl)

    // Link (a) in li
    const recipeLinkEl = document.createElement("a")
    recipeLinkEl.href = recipe.sourceURL
    recipeLinkEl.innerText = "View Recipe"
    recipeItemEl.appendChild(recipeLinkEl)

    // add to list (ul)
    recipesListEl.appendChild(recipeItemEl)
  })
}

async function getRecipe() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  )

  const data = await response.json()

  // console.log("data", data)

  return data.recipes
}

async function init() {
  const recipes = await getRecipe()

  // console.log(recipes)

  displayRecipes(recipes)
}

init()
