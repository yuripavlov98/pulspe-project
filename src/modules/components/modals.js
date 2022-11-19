
let btnPressed;
    function bindModal(triggerSelector, modalSelector, closeSelector, overlaySelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const overlay = document.querySelector(overlaySelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();
        // открываем модалку
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
                modal.style.display = 'block';
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        // закрываем модалку
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';

            });
            modal.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });


        // подложка
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                overlay.style.display = 'none';
                document.body.style.overflow = ''; 
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }


    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }



    bindModal('.btn-modal', '.modal-one', '.modal-one .modal__close', '.overlay');
    bindModal('.btn-modal-mini', '.modal-two', '.modal-two .modal__close', '.overlay');


    // showModalByTime('.popup-consultation', 60000);


