import uuid from 'uuid/v1';
import postService from '../apis/postService';

export default {
  namespace: 'posts',
  state: [],
  reducers: {
    'ADD_POST'(state, action){
      return state.concat([{ ...action.data, id: uuid() }]);
    },
    'DELETE_POST'(state, action) {
      return state.filter(post => post.id !== action.id);
    },
    'UPDATE_POST'(state, action) {
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.data,
            editing: !post.editing
          };
        }
        return post;
      });
    },
    'EDIT_POST'(state, action){
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      )
    },
    'SET_POSTS'(state, action) {
      return action.data;
    },
  },
};
