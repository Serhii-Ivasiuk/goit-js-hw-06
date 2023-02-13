const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

// Функція, яка створює і повертає розмітку одного елементу (шаблон)
const makeItemMarkup = item => {
	const ingredientsItemEl = document.createElement("li");
	ingredientsItemEl.textContent = item;
	ingredientsItemEl.classList.add("item");

	return ingredientsItemEl;
};

// Створимо массив розмітки елементів по шаблону
const itemsArrayEl = ingredients.map(makeItemMarkup);

// Отримаємо посилання на список #ingredients
const ingredientsRef = document.querySelector("#ingredients");

// Додамо всі інгредієнти у список #ingredients
ingredientsRef.append(...itemsArrayEl);
