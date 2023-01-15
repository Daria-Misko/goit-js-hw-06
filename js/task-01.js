// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const categories = document.getElementById('categories');
const nameOfCategory = document.querySelectorAll('.item');
const sumOfCategories = nameOfCategory.length;

function categoryName(i) {
	const categoryName = nameOfCategory[i].querySelector('h2');
	return console.log(`Category: ${categoryName.textContent}`);
}
const categoryLength = i => {
	const sumOfCategory = nameOfCategory[i].querySelectorAll('li');
	return console.log(`Elements: ${sumOfCategory.length}`);
}

console.log(`Number of categories: ${sumOfCategories}`)

categoryName(0);
categoryLength(0);
categoryName(1);
categoryLength(1);
categoryName(2);
categoryLength(2);