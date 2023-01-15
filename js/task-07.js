// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.addEventListener('change', fontSizeChange);

function fontSizeChange(event) {
	text.style.fontSize = event.currentTarget.value+"px";	
}

