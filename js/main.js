import './mock/data.js';
import { createPhotoDescription } from './mock/create-data.js';
import { createThumbnails } from './thumbnails.js';

//выносим кол-во фото в переменную, чтобы не плодить магические числа
const PHOTO_COUNT = 25;
const thumbnailContainer =  document.querySelector('.pictures');
/**
 * Создаем массив из объектов с инфой о фото
 *
 * @returns {object}
 */
const photos = new Array(PHOTO_COUNT).fill(null).map(() => createPhotoDescription());
const thumbnails = createThumbnails(photos);

// eslint-disable-next-line no-console
console.log(photos);

// eslint-disable-next-line no-console
console.log(thumbnails);
thumbnailContainer.appendChild(thumbnails);
