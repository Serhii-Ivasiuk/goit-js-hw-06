function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Отримуємо посилланя на кнопку та на елемент для виводу значенням кольору
const changeColorBtnRef = document.querySelector(".widget .change-color");
const currentBgOutputRef = document.querySelector(".widget .color");

// Створюємо обробник події
const onChangeColorBtnClick = () => {
	// Генеруємо випадковий колір
	const currentBgColor = getRandomHexColor();

	// Змінюємо колір фону body через інлайн-стиль
	document.body.style.backgroundColor = currentBgColor;

	// Записуємо значення кольору фону у відповідне поле розмітки
	currentBgOutputRef.textContent = currentBgColor;
};

// Підписуємось на подію click по кнопці Change color
changeColorBtnRef.addEventListener("click", onChangeColorBtnClick);
