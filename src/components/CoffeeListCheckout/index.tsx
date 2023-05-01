import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Coffee } from "../CoffeeList";

import { OrderedAction, OrderedCoffee, Price } from "./style";

interface CoffeeListCheckoutProps {
  item: {
    amount: number;
    coffee: Coffee;
  };
}

export function CoffeeListCheckout({ item }: CoffeeListCheckoutProps) {
  const { cart, updateCart, removeCoffee } = useContext(CartContext);

  const newCart = [...cart];
  const findCoffee = newCart.findIndex(
    (index) => index.coffee.id === item.coffee.id
  );

  function handleIncrement() {
    if (findCoffee >= 0) {
      newCart[findCoffee] = {
        ...newCart[findCoffee],
        amount: newCart[findCoffee].amount + 1,
      };
    }

    updateCart(newCart);
  }

  function handleDecrement() {
    if (findCoffee >= 0) {
      if (newCart[findCoffee].amount > 0) {
        newCart[findCoffee] = {
          ...newCart[findCoffee],
          amount: newCart[findCoffee].amount - 1,
        };
      }
    }

    updateCart(newCart);
  }

  function handleRemoveCoffee() {
    const cartWithoutOne = cart.filter(
      (data) => data.coffee.id !== item.coffee.id
    );

    removeCoffee(cartWithoutOne);
  }

  const totalAmountOfEachCoffee = item.amount * 9.9;

  return (
    <OrderedCoffee>
      <div>
        <img src={item.coffee.image} alt="" />
        <div>
          <span>{item.coffee.name}</span>
          <OrderedAction>
            <div>
              <Minus size={20} onClick={handleDecrement} />
              <p>{item.amount}</p>
              <Plus size={20} onClick={handleIncrement} />
            </div>
            <div>
              <Trash size={20} />
              <span onClick={handleRemoveCoffee}>remover</span>
            </div>
          </OrderedAction>
        </div>
      </div>
      <Price>{formatCurrency(totalAmountOfEachCoffee)}</Price>
    </OrderedCoffee>
  );
}
