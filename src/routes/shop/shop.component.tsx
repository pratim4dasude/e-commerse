// import SHOP_DATA from "../../shop-data.json";

// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesStart } from "../../store/categories/category.action";
// import { setCategories } from "../../store/categories/category.reducer";


// import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoryMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments("catagories"); //catagories
    //   // console.log(categoriesArray);
    //   // console.log(categoryMap);
    //   dispatch(setCategories(categoriesArray));
    // };
    // getCategoryMap();

    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
