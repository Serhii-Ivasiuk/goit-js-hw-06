const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// Функція, яка створює і повертає розмітку одного елементу галереї зображень (шаблон)
const makeGalleryItemMarkup = ({ url, alt }) => {
	return `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}"></li>`;
};

// Створимо массив розмітки елементів галереї по шаблону і об'єднаємо його в один рядок
const galleryItemsMarkup = images.map(makeGalleryItemMarkup).join("");

// Отримаємо посилання на список gallery
const galleryRef = document.querySelector(".gallery");

// Додамо розмітку елементів галереї у список gallery
galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
