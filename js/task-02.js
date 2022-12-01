const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liClass = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
const createLi = document.createElement("li");
createLi.textContent = ingredient;
createLi.classList.add('item');
liClass.append(createLi);
});