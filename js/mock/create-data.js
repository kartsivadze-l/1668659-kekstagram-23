import { getRandomIntInclusive, getRandomElementFromArray } from '../util.js';
import { COMMENTS, NAMES, DESCRIPTIONS } from './data.js';

//создаем пустой массив с id фоток, добавляем туда 25 элементов с числами от 1 до 25
const ids = [];
for (let i = 0; i < 25; i++){
  ids.push(i + 1);
}

//создаем пустой массив с id комментариев, добавляем туда 200 элементов с числами от 0 до 199
const commentIds = [];
for (let i = 0; i < 200; i++){
  commentIds.push(i);
}

/**
 * Создаем объект с комментарием, его id, аватаркой комментатора, текстом коммента и именем комментатора
 *
 * @returns {object}
 */
const createComment = () => {
  let commentId = getRandomElementFromArray(commentIds);
  commentId = commentId[0];

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomIntInclusive(0, 6)}.svg`,
    message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length - 1)],
    commenterName: NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
  };
};

/**
 * Создаем массив из объектов с комментариями
 *
 * @returns {object}
 */
const createComments = () => {
  const comments = [];
  for (let i = 0; i < getRandomIntInclusive(0, 5); i++) {
    comments.push(createComment());
  }
  return comments;
};

/**
 * Создаем объект с инфой о фото, включающий id фото, адрес, описание, кол-во лайков и комментарии
 *
 * @returns {object}
 */
const createPhotoDescription = () => {
  let  id = getRandomElementFromArray(ids);
  id = id[0];
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomIntInclusive(0, DESCRIPTIONS.length - 1)],
    likes: getRandomIntInclusive(15, 200),
    comments: createComments(),
  };
};

export {createPhotoDescription};
