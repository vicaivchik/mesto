/*const likes = document.querySelectorAll('.card__like');

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', toggleLike);
}

function toggleLike(event) {
    event.target.classList.toggle('card__like_active');
}*/

const buttonEdit = document.querySelector('.profile__button-edit');
const popUp = document.querySelector('.pop-up');
const popUpClose = document.querySelector('.pop-up__close');

function editProfile() {
    const name = document.querySelector('.profile__name').textContent;
    const work = document.querySelector('.profile__work').textContent;

    const nameInput = document.querySelector('.pop-up__input_type_name');
    const workInput = document.querySelector('.pop-up__input_type_work');

    nameInput.value = name;
    workInput.value = work;

    popUp.classList.add('pop-up_opened');
}

function closePopup() {
    popUp.classList.remove('pop-up_opened');
}

buttonEdit.addEventListener('click', editProfile);
popUpClose.addEventListener('click', closePopup);

// Находим форму в DOM
const formElement = document.querySelector('.pop-up__form');
// Находим поля формы в DOM
const nameInput = document.querySelector('.pop-up__input_type_name');
const jobInput = document.querySelector('.pop-up__input_type_work');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const jobVal = jobInput.value;
    const nameVal = nameInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    const name = document.querySelector('.profile__name');
    const work = document.querySelector('.profile__work');

    // Вставьте новые значения с помощью textContent
    name.textContent = nameVal;
    work.textContent = jobVal;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 