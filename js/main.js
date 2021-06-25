import './mock/data.js';
import { createPhotoData } from './mock/create-data.js';
import { createThumbnails } from './thumbnails.js';
import './form.js';

//выносим кол-во фото в переменную, чтобы не плодить магические числа
const PHOTO_COUNT = 25;
const thumbnailContainer =  document.querySelector('.pictures');
/**
 * Создаем массив из объектов с инфой о фото
 *
 * @returns {object}
 */
const photos = new Array(PHOTO_COUNT).fill(null).map(() => createPhotoData());
const thumbnails = createThumbnails(photos);

thumbnailContainer.appendChild(thumbnails);
