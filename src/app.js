import logger from 'redux-logger';
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    onAction: logger,
    //onStateChange(state){
    //  console.log(state);
    //},
  },
};