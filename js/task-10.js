function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxes = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

createBtn.addEventListener('click', getBoxAmount);
destroyBtn.addEventListener('click', () => boxes.innerHTML = '')

function getBoxAmount() {
	const input = document.querySelector('input').value;
	createBoxes(input);
}

function createBoxes(amount) {
	boxes.innerHTML = '';
	for (let i = 1; i <= amount; i++) {
		let size = 30+(i*10);
		const newDiv = document.createElement("div");
		newDiv.style.width = size+'px';
		newDiv.style.height = size+'px';
		newDiv.style.backgroundColor = getRandomHexColor();
		boxes.appendChild(newDiv);
	}
}

