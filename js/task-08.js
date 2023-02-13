// Отримуємо посилланя на форму
const formRef = document.querySelector(".login-form");

// Створюємо обробник події
const onFormSubmit = event => {
	// Відключаємо дії по-замовчуванню (перезавантаження сторінки)
	event.preventDefault();

	// Отримуємо значення полів форми через властивість elements
	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	// Перевіряємо наявність незаповнених полів форми і виводимо повідомлення
	if (email === "" || password === "") {
		alert("Заповніть усі поля форми");
		// Прериваємо роботу обробника події, щоб не очистились заповнені поля
		return;
	}

	// Збирємо значення полів форми в об'єкт і виводимо у консоль
	const formData = {
		email,
		password,
	};
	console.log(formData);

	// Очищуэмо значення полів форми методом reset
	formRef.reset();
};

// Підписуємось на подію submit нашої форми
formRef.addEventListener("submit", onFormSubmit);
