// Отримуємо посилланя на input та елемент з тектом
const refs = {
	inputRange: document.querySelector("#font-size-control"),
	text: document.querySelector("#text"),
};

// Створюємо обробник події
const onInputRangeChange = event => {
	// Отримуємо значення з поля inputRange
	const inputRangeValue = event.currentTarget.value;

	// Змінюємо розмір шрифту елементу з тектом через інлайн-стиль відповідно до значення з поля inputRange
	refs.text.style.fontSize = `${inputRangeValue}px`;
};

// Підписуємось на подію input в полі inputRange
refs.inputRange.addEventListener("input", onInputRangeChange);
