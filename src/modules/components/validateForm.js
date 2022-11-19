// Номер телефона
let setCoursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);

    } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

function createMask(event) {
    let matrix = '+7 (___)-___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
        val = def;
    }

    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
        if (this.value.length == 2) {
            this.value = '';
        }
    } else {
        setCoursorPosition(this.value.length, this);
    }
}

let inputs = document.querySelectorAll('[name="phone"]');

inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
});


// Инпут с именем только кириллица

const txtInputs = document.querySelectorAll('[name="name"]');

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });