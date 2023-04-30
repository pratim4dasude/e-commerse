import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { FC } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch , useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";
import { CategoryItem } from "../../store/categories/category.types";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const  addItemToCart  = useContext(addItemToCart);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD to CART
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
