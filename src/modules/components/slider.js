import Swiper, { Navigation } from 'swiper';


function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation], //добавить модуль еще здесь
			observer: true,
			observeParents: true,
			slidesPerView: 1, //кол-во слайдов для показа
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			initialSlide: 0,
			// loop: true,
			// slidesPerGroup: 1,
			// grabCursor: true,
      centerInsufficientSlides: true,
			centeredSlides: true,
      // centeredSlidesBounds: true,


			// Пагинация
			
			navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


			// Брейкпоинты
			
			// breakpoints: {
			// 	320: {
				 // when window width is >= 320px
			// 		slidesPerView: 1,
			// 		spaceBetween: 1,
			// 		autoHeight: true,
			// 	},
			// 	390: {
			// 		slidesPerView: 1.2,
			// 		spaceBetween: 1,
			// 		autoHeight: true,
			// 	},
			// 	430: {
			// 		slidesPerView: 1.2,
			// 		spaceBetween: 5,
			// 	},
			// 	476: {
			// 		slidesPerView: 1.5,
			// 		spaceBetween: 5,
			// 	},
			// 	676: {
			// 		slidesPerView: 2.1,
			// 		spaceBetween: 5,
			// 	},
			// 	768: {
			// 		slidesPerView: 2.7,
			// 		spaceBetween: 10,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 20,
			// 	},
			// 	1268: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 30,
			// 	},
			// },
			
			// События
			on: {

			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});