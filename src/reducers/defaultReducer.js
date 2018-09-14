const defaultReducer = (state = {}, action) => {
  console.log('default reducer', action);
  switch (action.type) {
    default:
      return state;
  }
}

export default defaultReducer;
