/**
 * Возвращаем объект с инфой о фото: url-адресом, кол-вом лайков, кол-вом комментов
 *
 * @param {array} photos - массив из объектов с инфой о фото
 * @returns {object}
 */
const createThumbnails = function (photos) {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnailFragment = document.createDocumentFragment ();

  photos.forEach(({url, likes, comments}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;

    thumbnailFragment.appendChild(thumbnail);
  });

  return thumbnailFragment;
};

export {createThumbnails};
