// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const firstButton = document.querySelector('[data-action="decrement"]');
const secondButton = document.querySelector('[data-action="increment"]');
let counter = document.getElementById("value");

firstButton.addEventListener("click", decrementNumber);
secondButton.addEventListener("click", incrementNumber);

function decrementNumber() {
	counterValue -= 1;
	counter.innerHTML = counterValue;
}
function incrementNumber() {
	counterValue += 1;
	counter.innerHTML = counterValue;
}