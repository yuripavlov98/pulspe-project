const btnTrigger = document.querySelectorAll('.catalog-item__link');
const showContent = document.querySelectorAll('.catalog-item__list');
const hideContent = document.querySelectorAll('.catalog-item__content');
const backContent = document.querySelectorAll('.catalog-item__back');

function showMore() {
    for (let i = 0; i < btnTrigger.length; i++) {
        btnTrigger[i].addEventListener('click', (e) => {
            e.preventDefault();
            showContent[i].classList.toggle("catalog-item__list_active");
            hideContent[i].classList.toggle("catalog-item__content_active");
        });
    };
}
showMore();

function hideMore() {
    for (let i = 0; i < backContent.length; i++) {
        backContent[i].addEventListener('click', (e) => {
            e.preventDefault();
            showContent[i].classList.toggle("catalog-item__list_active");
            hideContent[i].classList.toggle("catalog-item__content_active");
        });
    };
}
hideMore();


