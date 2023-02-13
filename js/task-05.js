// Отримуємо посилланя на input та output
const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};

// Створюємо обробник події
const onInputChange = event => {
	// Записуємо в output значення з поля input
	refs.output.textContent = event.currentTarget.value;

	// Якщо input порожній, записуємо в output "Anonymous"
	if (refs.output.textContent === "") {
		refs.output.textContent = "Anonymous";
	}
};

// Підписуємось на подію input в полі input
refs.input.addEventListener("input", onInputChange);
