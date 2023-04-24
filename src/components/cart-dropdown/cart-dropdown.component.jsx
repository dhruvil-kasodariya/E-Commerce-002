import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const goToCheckOutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>CHECK-OUT</Button>
    </div>
  );
};

export default CartDropdown;
