// src/redux/actions.js

// Define action types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const NAVIGATE_TO_DASHBOARD = 'NAVIGATE_TO_DASHBOARD'; // Add new action type

// Action creators
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
});

export const navigateToDashboard = () => ({ // Add new action creator
  type: NAVIGATE_TO_DASHBOARD,
});
