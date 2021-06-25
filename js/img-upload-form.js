import { isEscEvent } from './util.js';

const MAX_COMMENT_LENGTH = 140;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_AMOUNT = 5;
const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = uploadOverlay.querySelector('.img-upload__cancel');
const hashtagInput = uploadOverlay.querySelector('.text__hashtags');
const descriptionInput = uploadOverlay.querySelector('.text__description');

/**
 * Закрываем форму для доб-я фото
 * Сбрасываем введенные значения полей
 * Удаляем обработчики событий
 */
const onUploadFormClose = function () {
  uploadInput.value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';
  document.body.classList.remove('modal-open');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onUploadFormEscDown);
  cancelButton.removeEventListener('click', onUploadFormClose);
  uploadOverlay.classList.add('hidden');
};

const onUploadFormEscDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onUploadFormClose();
  }
};

/**
 * Добавляем обработчики событий при открытии формы
 */
const onUploadInputChange = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadFormEscDown);
  cancelButton.addEventListener('click', onUploadFormClose);
};

uploadInput.addEventListener('change', onUploadInputChange);

hashtagInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onUploadFormEscDown);
});

hashtagInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onUploadFormEscDown);
});

descriptionInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onUploadFormEscDown);
});

descriptionInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onUploadFormEscDown);
});

descriptionInput.addEventListener('input', () => {
  if (descriptionInput.value.length > MAX_COMMENT_LENGTH) {
    descriptionInput.setCustomValidity(`Длина комментария не должна превышать ${MAX_COMMENT_LENGTH}-ка символов`);
  }
  else {
    descriptionInput.setCustomValidity('');
  }
  descriptionInput.reportValidity();
});

const testHashtag = function (hashtag) {
  const re = /^#[A-Za-zА-Яа-я0-9]*$/;
  let result = false;

  if (!(re.test(hashtag))) {
    hashtagInput.setCustomValidity(`
      Хэштег должен начинаться с символа # (решетка) и состоять только из букв и цифр. Пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т.п.), эмодзи и т.д. не допускаются`);
  }
  else if (hashtag.length < MIN_HASHTAG_LENGTH) {
    hashtagInput.setCustomValidity(`Минимальное количество символов, включая решетку(#), составляет ${  MIN_HASHTAG_LENGTH  } символа`);
  }
  else if (hashtag.length > MAX_HASHTAG_LENGTH) {
    hashtagInput.setCustomValidity(`Длина хэштега, включая решетку(#), не должна превышать ${  MAX_HASHTAG_LENGTH  }-ти символов`);
  }
  else {
    hashtagInput.setCustomValidity('');
    result = true;
  }

  return result;
};

hashtagInput.addEventListener('input', () => {
  const hashtags = hashtagInput.value.trim().split(/ +/);

  if (hashtags.length > MAX_HASHTAG_AMOUNT) {
    hashtagInput.setCustomValidity(`Максимально возможное количество хэштегов – ${MAX_HASHTAG_AMOUNT}`);
  }
  else {
    hashtagInput.setCustomValidity('');
    const uniqueHashtags = [];
    for (let i = 0; i < hashtags.length; i++) {
      const hashtag = hashtags[i].toLowerCase();
      if (uniqueHashtags.includes(hashtag)) {
        hashtagInput.setCustomValidity(`Хэштег ${hashtag} уже указан, используйте другой хэштег`);
        break;
      }
      else if (!testHashtag(hashtag)) {
        break;
      }
      else {
        uniqueHashtags.push(hashtag);
      }
    }
  }
  hashtagInput.reportValidity();
});

