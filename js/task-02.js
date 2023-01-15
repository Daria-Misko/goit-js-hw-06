const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredientsList = document.getElementById("ingredients");
console.log(ingredientsList);

for (const ingredient of ingredients) {
	const liElem = document.createElement("li");
	liElem.textContent = ingredient;
	liElem.classList = 'item';
	ingredientsList.appendChild(liElem);
}
