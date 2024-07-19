// src/redux/reducers.js

import { ADD_PRODUCT, REMOVE_PRODUCT, NAVIGATE_TO_DASHBOARD } from './actions'; // Import new action type

// Initial state
const initialState = {
  products: [],
  redirectToDashboard: false // Add redirectToDashboard state
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
    case NAVIGATE_TO_DASHBOARD: // Handle navigation action
      return {
        ...state,
        redirectToDashboard: true
      };
    default:
      return state;
  }
};

export default rootReducer;
