// import { createContext, useState, useEffect, useReducer } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

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

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const INITIAL_STATE = {
//   cartItems: [],
//   isCartOpen: false,
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   // const payload = {
//   //   cartItems,
//   //   cartCount,
//   //   cartTotal
//   // }

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };

//     default:
//       throw new Error(`unhandled typ eof ${type} in cartReducer `);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);

//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);

//   // useEffect(() => {
//   //   const newCartCount = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartCount(newCartCount);
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const newCartTotal = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   //     0
//   //   );
//   //   setCartTotal(newCartTotal);
//   // }, [cartItems]);

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartTotal: newCartTotal,
//         cartCount: newCartCount,
//       })

//       // {
//       // type: CART_ACTION_TYPES.SET_CART_ITEMS,
//       // payload: {
//       //   cartItems: newCartItems,
//       //   cartTotal: newCartTotal,
//       //   cartCount: newCartCount,
//       // },}
//     );
//   };

//   const addItemToCart = (productToAdd) => {
//     // setCartItems(addCartItem(cartItems, productToAdd));
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     // setCartItems(removeCartItem(cartItems, cartItemToRemove));
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   };
//   const clearItemFromCart = (cartItemToClear) => {
//     // setCartItems(clearCartItem(cartItems, cartItemToClear));
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

//     // { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool }
//     // );
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
