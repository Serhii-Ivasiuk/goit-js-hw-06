// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // Отримуємо посилланя на input, кнопки та блок, в який буде рендеритись колекція елементів
// const refs = {
// 	boxesOutput: document.querySelector("#boxes"),
// 	input: document.querySelector("#controls input"),
// 	createBtn: document.querySelector("#controls [data-create]"),
// 	destroyBtn: document.querySelector("#controls [data-destroy]"),
// };

// // Функція для створення колекції елементів
// const createBoxes = amount => {
// 	let boxesMurkup = [];

// 	for (let i = 0; i < amount; i += 1) {
// 		let newBox = document.createElement("div");
// 		newBox.style.width = `${30 + 10 * i}px`;
// 		newBox.style.height = `${30 + 10 * i}px`;
// 		newBox.style.backgroundColor = getRandomHexColor();

// 		boxesMurkup.push(newBox);
// 	}

// 	refs.boxesOutput.append(...boxesMurkup);
// };

// // Функція для очищення колекції елементів
// const destroyBoxes = () => {
// 	refs.boxesOutput.innerHTML = "";
// };

// // Створюємо обробник події для кілку по кнопці "Create"
// const onCreateBtnClick = () => {
// 	// Отримуємо значення з поля інпуту і передаємо його у виклик функції createBoxes
// 	const inputValue = refs.input.value;
// 	createBoxes(inputValue);
// };

// // Створюємо обробник події для кілку по кнопці "Destroy"
// const onDestroyBtnClick = () => {
// 	destroyBoxes();
// };

// // Підписуємось на події кліків по кнопкам "Create" та "Destroy"
// refs.createBtn.addEventListener("click", onCreateBtnClick);
// refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

// !Варіант 2 - з перевіркою на наявність елементів в колекції

// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // Отримуємо посилланя на input, кнопки та блок, в який буде рендеритись колекція елементів
// const refs = {
// 	boxesOutput: document.querySelector("#boxes"),
// 	input: document.querySelector("#controls input"),
// 	createBtn: document.querySelector("#controls [data-create]"),
// 	destroyBtn: document.querySelector("#controls [data-destroy]"),
// };

// // Функція для отримання розміру останнього елементу в колекції
// const getLastBoxSize = () => {
// 	if (refs.boxesOutput.children.length) {
// 		const boxWidth = refs.boxesOutput.lastChild.style.width;
// 		return parseInt(boxWidth) + 10;
// 	}
// 	return 30;
// };

// // Функція для створення колекції елементів
// const createBoxes = amount => {
// 	let boxesMurkup = [];

// 	const boxSize = getLastBoxSize();

// 	for (let i = 0; i < amount; i += 1) {
// 		let newBox = document.createElement("div");
// 		newBox.style.width = `${boxSize + 10 * i}px`;
// 		newBox.style.height = `${boxSize + 10 * i}px`;
// 		newBox.style.backgroundColor = getRandomHexColor();

// 		boxesMurkup.push(newBox);
// 	}

// 	refs.boxesOutput.append(...boxesMurkup);
// };

// // Функція для очищення колекції елементів
// const destroyBoxes = () => {
// 	refs.boxesOutput.innerHTML = "";
// };

// // Створюємо обробник події для кілку по кнопці "Create"
// const onCreateBtnClick = () => {
// 	// Отримуємо значення з поля інпуту і передаємо його у виклик функції createBoxes
// 	const inputValue = refs.input.value;
// 	createBoxes(inputValue);
// };

// // Створюємо обробник події для кілку по кнопці "Destroy"
// const onDestroyBtnClick = () => {
// 	destroyBoxes();
// };

// // Підписуємось на події кліків по кнопкам "Create" та "Destroy"
// refs.createBtn.addEventListener("click", onCreateBtnClick);
// refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

// !Варіант 3 - з очисткою колекції перед створенням нової

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
