import './mock/data.js';
import { createPhotoDescription } from './mock/create-data.js';

//выносим кол-во фото в переменную, чтобы не плодить магические числа
const PHOTO_COUNT = 25;

export {PHOTO_COUNT};

/**
 * Создаем массив из объектов с инфой о фото
 *
 * @returns {object}
 */
const photos = new Array(PHOTO_COUNT).fill(null).map(() => createPhotoDescription());

// eslint-disable-next-line no-console
console.log(photos);
