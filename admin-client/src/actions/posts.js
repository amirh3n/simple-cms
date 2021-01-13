import { CREATE } from '../constants/actionTypes';
import * as api from '../helpers/apiHelper';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: CREATE, payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
