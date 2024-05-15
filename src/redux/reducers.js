// src/redux/reducers.js

import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions';

// Initial state
const initialState = {
  products: []
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;

