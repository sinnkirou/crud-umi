import uuid from 'uuid/v1';
import postService from '../apis/postService';

export default {
  namespace: 'posts',
  state: [],
  reducers: {
    ADD_POST(state, action) {
      return state.concat([{ ...action.data, id: uuid() }]);
    },
    DELETE_POST(state, action) {
      return state.filter(post => post.id !== action.id);
    },
    UPDATE_POST(state, action) {
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
    EDIT_POST(state, action) {
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      )
    },
    SET_POSTS(state, action) {
      return action.data;
    },
  },
  effects: {
    *GET_INIT_POSTS_ASYNC(action, { call, put }) {
      const data = yield call(postService.getPosts);
      console.log((action.from ? action.from : "default") + " initialized");
      if (data) {
        yield put({
          type: 'SET_POSTS',
          data
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'GET_INIT_POSTS_ASYNC',
        from: 'subscriptions'
      });
    },
    welcome({ history }) {
      return history.listen(({ pathname }) => {
        pathname = pathname.toString().replace("/", "");
        pathname = !pathname ? "home" : pathname;
        console.log("you are now in " + pathname + " page.");
      });
    },
    onClick() {
      document.addEventListener('click', () => {
        console.log("mouse clicked");
      })
    }
  },
};
