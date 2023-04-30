// import Directory from "./components/directory/directory.component";
// import "./categories.styles.scss";
// import CategoryItem from "./components/category-item/category-item.component";
/////////////////////////////////////

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { createAction } from "./utils/reducer/reducer.utils";

import { useDispatch, useSelector } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";

////////////////////////////////
import Home from "./routes/home/home.component";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();
  // let test = useSelector((state) => state.user.test);
  // test.a=2;
  useEffect(() => {
    dispatch(checkUserSession());

    // getCurrentUser();

    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   // console.log(user);
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }

    //   const pickedUser =
    //     user &&
    //     (({ accessToken, email }) => ({
    //       accessToken,
    //       email,
    //     }))(user);

    //   console.log(setCurrentUser(pickedUser));

    //   dispatch(setCurrentUser(pickedUser));
    // });
    // return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      {/* it tell us if it at /home link then only render  if we type http://localhost:3000/home it will show the page*/}
      {/* <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} /> */}
      {/* it has to match the paent route ie / then shop so we finally get /shop 
        if any error occur in shop part it will remain on home so use outlet to run above the home*/}
    </Routes>
  );
};

export default App;
