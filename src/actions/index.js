import actionTypes from '../constants/actionTypes';

export const addPost = ({ ...data }) => ({
  type: actionTypes.ADD_POST,
  data: {
    editing: false,
    ...data
  }
});

export const deletePost = ({ id }) => ({
  type: actionTypes.DELETE_POST,
  id
});

export const editPost = ({ id }) => ({
  type: actionTypes.EDIT_POST,
  id
});

export const updatePost = ({ id, data }) => ({
  type: actionTypes.UPDATE_POST,
  id,
  data
});

export const setPosts = ({ posts }) => ({
  type: actionTypes.SET_POSTS,
  data: posts
});