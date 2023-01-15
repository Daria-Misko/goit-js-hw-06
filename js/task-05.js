// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
	inputAria: document.getElementById('name-input'),
	userName: document.getElementById('name-output'),
}

refs.inputAria.addEventListener('input', onInputChange);

function onInputChange(event) {
	if (event.currentTarget.value) {
		return refs.userName.textContent = event.currentTarget.value;
	}
	refs.userName.textContent = "Anonymous";
}
