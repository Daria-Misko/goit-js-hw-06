
// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const mail = formElements.email;
	const pass = formElements.password;
	if (mail.value === "" || pass.value === "") {
		const message = "All fields must be filled!"
		return alert(message);
	} else {
		console.log(`"email": ${mail.value}, "password": ${pass.value}`)
	}
	event.currentTarget.reset();

	// const formData = new FormData(event.currentTarget);
	// console.log(formData);
	// formData.forEach((value, name) => {
	// 	console.log('onFormSubmet -> name', name);
	// 	console.log('onFormSubmet -> value', value);
	// }
	// )
}
