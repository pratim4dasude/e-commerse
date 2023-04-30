import { AnyAction } from "redux";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
  //   cartCount: 0,
  //   cartTotal: 0,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  // const { type, payload } = action;

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };

  //   default:
  //     return state;
  // }


// import { createSlice } from "@reduxjs/toolkit";

// const addCartItem = (cartItems, productToAdd) => {
//   // find exesting product
//   const existingCartItems = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   // if found incresse the quantity

//   if (existingCartItems) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   // new product
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the elemet to remove
//   const existingCartItems = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // if one the comletely remove

//   if (existingCartItems.quantity === 1) {
//     // console.log();
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // decrease the quantity by 1

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const addItemToCart = (cartItems, productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
//   //   updateCartItemsReducer(newCartItems);
// };

// export const clearItemFromCart = (cartItems, cartItemToClear) => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
//   //   updateCartItemsReducer(newCartItems);
// };

// export const setIsCartOpen = (boolean) =>
//   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: CART_INITIAL_STATE,
//   reducers: {
//     setIsCartOpen(state, action) {
//       state.isCartOpen = action.payload;
//     },

//     addItemToCart(state, action) {
//       state.cartItems = addCartItem(state.cartItems, action.payload);
//     },

//     removeItemFromCart(state, action) {
//       state.cartItems = removeCartItem(state.cartItems, action.payload);
//     },

//     clearItemFromCart(state, action) {
//       state.cartItems = clearCartItem(state.cartItems, action.payload);
//     },
//   },
// });

// export const {
//   setIsCartOpen,
//   addItemToCart,
//   removeItemFromCart,
//   clearItemFromCart,
// } = cartSlice.actions;

// export const cartReducer = cartSlice.reducer;
