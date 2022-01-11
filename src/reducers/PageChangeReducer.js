const PageChangeReducer = (state = 1, action) => {
  switch (action.type) {
    case "PAGECHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default PageChangeReducer;
