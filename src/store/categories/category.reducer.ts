import { AnyAction } from "redux";

import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import {
  // CategoryAction,
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./category.action";

// import { createSlice } from "@reduxjs/toolkit";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: CATEGORIES_INITIAL_STATE,
//   reducers: {
//     setCategories(state, action) {
//       state.categories = action.payload;
//     },
//   },
// });

// export const { setCategories } = categoriesSlice.actions;
// export const categoriesReducer = categoriesSlice.reducer;

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {

  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};

  // const { type, payload } = action;

  // switch (type) {
  //   case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
  //     return { ...state, categories: payload };

  //   default:
  //     return state;
  // }

  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };

  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, categories: action.payload, isLoading: false };

  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return { ...state, error: action.payload, isLoading: false };
  //   default:
  //     return state;
  // }
// };

// (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

// switch (type) {
//   case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//     return { ...state, categories: payload };

//   default:
//     return state;
// }

// // switch (type) {
// //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
// //     return { ...state, isLoading: true };

// //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
// //     return { ...state, categories: payload, isLoading: false };

// //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
// //     return { ...state, error: payload, isLoading: false };
// //   default:
// //     return state;
// // }
// };
