import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

// import "./Header.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./HeaderStyle";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartStateHidden = useSelector((state) => state.cart.hidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/sign-in-and-sign-up">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartStateHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
export default Header;
