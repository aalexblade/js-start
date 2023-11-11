const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const itemIngredients = ingredients.map((ingredient) => {
  const liRef = document.createElement("li")
  liRef.textContent = ingredient
  liRef.classList.add('item')

  return liRef
})



ingredientsRef.append(...itemIngredients)

// ingredientsRef.append(itemIngredients)