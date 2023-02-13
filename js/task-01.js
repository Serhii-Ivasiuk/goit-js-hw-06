// 1.1 - Отримаємо псевдо-массив елементів li.item всередні списку категорій ul#categories
const categoriesItemsRef = document.querySelectorAll("#categories > .item");

// 1.2 - Виводимо повідомлення
console.log("Number of categories:", categoriesItemsRef.length);

// 2.1 - Функція, яка логує інформацію (текст заголовку і кількість елементів) по кожній категорії
const logCategoryInfo = categories => {
	categories.forEach(item => {
		console.log("Category:", item.querySelector("h2").textContent);
		console.log("Elements:", item.querySelector("ul").children.length);
	});
};

logCategoryInfo(categoriesItemsRef);
