import { CREATE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return action.payload;

    default:
      return posts;
  }
};
