// створюємо змінну для зберігання поточного значення лічильника
let counterValue = 0;

// Отримаємо посилання на кнопки лічильника і на елемент розмітки зі значенням лічильника
const decrementBtnRef = document.querySelector(
	"button[data-action='decrement']"
);
const incrementBtnRef = document.querySelector(
	"button[data-action='increment']"
);
const valueRef = document.querySelector("#value");

// додаємо слухачів кліків до кнопок лічильника, які будуть змінювати значення змінної counterValue і перезаписувати його в елемент розмітки
decrementBtnRef.addEventListener("click", () => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener("click", () => {
	counterValue += 1;
	valueRef.textContent = counterValue;
});
