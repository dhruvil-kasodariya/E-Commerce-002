import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navigation.style";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navigation = () => {
  const isCartOpen = useSelector(selectCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutStart());
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <h1>CLOTH KING</h1>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <ToastContainer />
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
