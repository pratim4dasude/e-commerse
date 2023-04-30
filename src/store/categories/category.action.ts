import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSucess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// export type CategoryAction =
//   | FetchCategoriesStart
//   | FetchCategoriesSucess
//   | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSucess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

// export const fetchCategoriesAsync = () => async (dispatch) => {

//   dispatch(fetchCategoriesStart());
//   try {
//       const categoriesArray = await getCategoriesAndDocuments("catagories");
//       dispatch(fetchCategoriesSuccess(categoriesArray));

//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }

// };
