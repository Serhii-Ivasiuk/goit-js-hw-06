function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Отримуємо посилланя на input, кнопки та блок, в який буде рендеритись колекція елементів
const refs = {
	boxesOutput: document.querySelector("#boxes"),
	input: document.querySelector("#controls input"),
	createBtn: document.querySelector("#controls [data-create]"),
	destroyBtn: document.querySelector("#controls [data-destroy]"),
};

// Функція для очищення колекції елементів
const destroyBoxes = () => {
	refs.boxesOutput.innerHTML = "";
};

// Функція для створення колекції елементів
const createBoxes = amount => {
	destroyBoxes();

	let boxesMurkup = [];

	for (let i = 0; i < amount; i += 1) {
		let newBox = document.createElement("div");
		newBox.style.width = `${30 + 10 * i}px`;
		newBox.style.height = `${30 + 10 * i}px`;
		newBox.style.backgroundColor = getRandomHexColor();

		boxesMurkup.push(newBox);
	}

	refs.boxesOutput.append(...boxesMurkup);
};

// Створюємо обробник події для кілку по кнопці "Create"
const onCreateBtnClick = () => {
	// Отримуємо значення з поля інпуту і передаємо його у виклик функції createBoxes
	const inputValue = refs.input.value;
	createBoxes(inputValue);
};

// Створюємо обробник події для кілку по кнопці "Destroy"
const onDestroyBtnClick = () => {
	destroyBoxes();
	// Додатково очищаємо поле інпуту
	refs.input.value = "";
};

// Підписуємось на події кліків по кнопкам "Create" та "Destroy"
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
