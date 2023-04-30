import { useContext, useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import "./category.styles";

import ProductCard from "../../components/product-card/product-card.component";
// import { CategoriesContext } from "../../contexts/categories.context";

import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setproducts] = useState(categoriesMap[category]);

  // console.log('render/rerendering category components');

  useEffect(() => {
    // console.log('effect callingsetproducts');
    setproducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // return (
  //   <Fragment>
  //     <Title>{category.toUpperCase()}</Title>
  //     <CategoryContainer>
  //       {products &&
  //         products.map((product) => (
  //           <ProductCard key={product.id} product={product} />
  //         ))}
  //     </CategoryContainer>
  //   </Fragment>
  // );

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

// return (
//     <Fragment>
//       <Title>{category.toUpperCase()}</Title>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <CategoryContainer>
//           {products &&
//             products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//         </CategoryContainer>
//       )}
//     </Fragment>
//   );
// };

export default Category;
