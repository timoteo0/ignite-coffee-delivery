import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import { CartContext } from "../../context/CartContext";
import { HeaderContainer } from "./styles";
import { LocationContainer } from "./styles";

export function Header() {
  const { cart } = useContext(CartContext);

  const amountOfCoffees = cart.map((item) => {
    return item.amount;
  });

  const sumAmountOfCoffees = amountOfCoffees.reduce((amount, acc) => {
    return amount + acc;
  }, 0);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <LocationContainer>
          <MapPin size={32} weight="fill" />
          <span>São Paulo, SP</span>
        </LocationContainer>
        <NavLink to="/checkout">
          <button>
            <ShoppingCart size={32} weight="fill" />

            {sumAmountOfCoffees !== 0 ? <p>{sumAmountOfCoffees}</p> : ""}
          </button>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
