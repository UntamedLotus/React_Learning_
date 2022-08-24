import { BUY_CAKE } from "./cakeTypes";

// state
const initialState = {
  numOfCakes: 10,
};

// Reducer Function
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;