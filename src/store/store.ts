import { legacy_createStore as createStore } from "redux";

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// // import { compose, createStore, applyMiddleware } from "redux";
import { compose, applyMiddleware, Middleware } from "redux";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// // import thunk from "redux-thunk";

// // const loggerMiddleware = (store) => (next) => (action) => {
// //   if (!action.type) {
// //     return next(action);
// //   }
// //   console.log("type : ", action.type);
// //   console.log("payload : ", action.payload);
// //   console.log("currentState : ", store.getState());

// //   next(action); // jumping to next state

// //   console.log("nextState : ", store.getState());
// // };

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
//   Boolean
// );

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  // blacklist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
// });
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
