// import { createContext, useState, useEffect } from "react";

// // import SHOP_DATA from "../shop-data.js";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   // only once sice to load in firebase
//   // useEffect(() => {
//   //   addCollectionAndDocuments('catagories',SHOP_DATA);
//   // }, []);




//   useEffect(() => {
//     const getCategoryMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       // console.log(categoryMap);
//     setCategoriesMap(categoryMap);

//     };
//     getCategoryMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
