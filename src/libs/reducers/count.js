const count = (state = 0, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return state + action.payload;

    default:
      return state;
  }
};

export default count;
