// constants
export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const RESET = "RESET";

//reducer
export const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
