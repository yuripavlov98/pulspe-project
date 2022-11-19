//Добавляю название товара в модалку
const btnModal = document.querySelectorAll('.btn-modal-mini');
const subtitleCard = document.querySelectorAll('.catalog-item__subtitle');
const modalDescr = document.querySelector('.modal__descr-two');

function addSubtitleInModal() {
    for (let i = 0; i < btnModal.length; i++) {
        btnModal[i].addEventListener('click', () => {
            modalDescr.textContent = subtitleCard[i].textContent;
            
        });
    };
}

addSubtitleInModal();


 