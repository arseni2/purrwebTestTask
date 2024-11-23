const heroHeader = document.querySelector(".hero__header");
const burgerMenuIcon = document.querySelector(".hero__header__burger")
const burgerMenu = document.querySelector(".burgerMenu")
const burgerMenuCloseIcon = document.querySelector(".burgerMenu__container__close")
const btns = document.querySelectorAll(".button--primary--dialog")
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.modal__content > .modal__close');
const closeModalThank = document.querySelector('.successFormSubmition > .modal__close');
const closeGdprModal = document.querySelector(".gdpr__close")
const successFormSubmitionModal = document.querySelector(".successFormSubmition")
const button = document.querySelector(".successFormSubmition > button")
const gdpr = document.querySelector(".gdpr")
const gdprAccept = document.querySelector(".gdpr > button")
const gdprDecline = document.querySelector(".gdpr > button.button--secondary")

window.onscroll = () => {
    if (window.scrollY > 0) {
        heroHeader.style.position = "fixed";
        heroHeader.style.maxWidth = "100%";
        heroHeader.style.top = "0"; // Добавлю top: 0 для фиксированной позиции
    } else {
        heroHeader.style.position = "relative";
    }
};
burgerMenuIcon.onclick = () => {
    burgerMenu.style.display = 'block'
}
burgerMenuCloseIcon.onclick = () => {
    burgerMenu.style.display = 'none'
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
      modal.showModal();
  });
})

closeModalBtn.addEventListener('click', () => {
    modal.close();
});

closeGdprModal.addEventListener("click", () => {
    gdpr.close()
})
gdprAccept.addEventListener("click", () => {
    gdpr.close()
})
gdprDecline.addEventListener("click", () => {
    gdpr.close()
})
closeModalThank.addEventListener("click", () => {
    console.log("lclclclc")
    successFormSubmitionModal.close()
})
button.addEventListener("click", () => {
    successFormSubmitionModal.close()
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');
    const phoneInput = document.getElementById('phone');
    const requiredFields = form.querySelectorAll('.form__group--required .form__input');
    const phoneMask = "+7 (___) ___-__-__";

    // Маска для ввода телефона
    phoneInput.addEventListener("input", (e) => {
        const value = phoneInput.value.replace(/\D/g, ""); // Убираем все нецифровые символы
        let maskedValue = phoneMask;
        let index = 0;

        for (const char of value) {
            if (index < maskedValue.length) {
                maskedValue = maskedValue.replace("_", char);
                index++;
            }
        }
        phoneInput.value = maskedValue.replace(/_+/g, "").trim(); // Убираем оставшиеся подчеркивания
    });

    // Валидация формы

});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');
    const requiredFields = document.querySelectorAll('.form__input');
    const successFormSubmitionModal = document.querySelector(".successFormSubmition");

    // Функция показа ошибки
    const showError = (field) => {
        const errorElement = field.closest('.form__group').querySelector('.form__error');
        errorElement.classList.add('form__error--visible');
        field.classList.add('form__input--invalid');
    };

    // Функция скрытия ошибки
    const hideError = (field) => {
        const errorElement = field.closest('.form__group').querySelector('.form__error');
        errorElement.classList.remove('form__error--visible');
        field.classList.remove('form__input--invalid');
    };

    // Обработчик для каждого поля
    requiredFields.forEach((field) => {
        let touched = false; // Флаг "затронутости" поля

        // Обработчик потери фокуса
        field.addEventListener('blur', () => {
            touched = true; // Поле теперь считается затронутым
            if (!field.value.trim()) {
                showError(field);
            }
        });

        // Обработчик ввода данных
        field.addEventListener('input', () => {
            if (touched && field.value.trim()) {
                hideError(field);
            }
        });
    });

    // Обработчик отправки формы
    form.addEventListener("submit", (event) => {
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                showError(field);
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault(); // Блокируем отправку формы
        } else {
            event.preventDefault(); // Для тестирования. Уберите, если форма реально отправляется.

            // Показываем модальное окно успешной отправки
            successFormSubmitionModal.showModal();
        }
    });
});