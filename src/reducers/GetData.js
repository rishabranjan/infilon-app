const GetData = (state = {}, action) => {
  switch (action.type) {
    case "GETDATA":
      return action.payload;
    default:
      return state;
  }
};

export default GetData;
