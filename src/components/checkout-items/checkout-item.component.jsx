import { useContext } from "react";
import {
  RemoveButton,
  Value,
  Arrow,
  Quantity,
  ItemLeble,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkout-item.styles.jsx";

import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemLeble>{name}</ItemLeble>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <ItemLeble>{price}</ItemLeble>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
