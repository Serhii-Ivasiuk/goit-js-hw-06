// Отримуємо посилланя на input
const inputRef = document.querySelector("#validation-input");

// Створюємо обробник події
const onInputBlur = event => {
	// Отримуємо значення атрибуту data-length і приводимо його до числа
	const attributeValue = Number(inputRef.dataset.length);

	// Отримуємо кількість введених символів в інпут
	const inputValueLength = event.currentTarget.value.length;

	// Перевіряємо чи введена правильна кількість символів і додаємо необхні класи
	if (inputValueLength === attributeValue) {
		inputRef.classList.add("valid");
		inputRef.classList.remove("invalid");
	} else if (inputValueLength === 0) {
		inputRef.classList.remove("valid");
		inputRef.classList.remove("invalid");
	} else {
		inputRef.classList.add("invalid");
		inputRef.classList.remove("valid");
	}
};

// Підписуємось на подію blur в полі input
inputRef.addEventListener("blur", onInputBlur);
