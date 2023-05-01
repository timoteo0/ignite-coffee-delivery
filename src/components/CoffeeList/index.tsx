import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CartContext } from "../../context/CartContext";

import { AddCartButton, BuyInfo, CoffeeContainer, Content } from "./styles";

export interface Coffee {
  id: number;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeList({ coffee }: CoffeeProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const { addCoffee } = useContext(CartContext);

  const coffeePrice = coffee.price.toFixed(2).replace(".", ",");

  function handleAddAmount() {
    setCoffeeAmount((state) => state + 1);
  }

  function handleRemoveAmount() {
    if (coffeeAmount > 0) {
      setCoffeeAmount((state) => state - 1);
    }
  }

  function handleAddToCart() {
    if (coffeeAmount !== 0) {
      addCoffee(coffee, coffeeAmount);
    }
  }

  return (
    <CoffeeContainer>
      <Content>
        <img src={coffee.image} alt="" />
        <div>
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
        <BuyInfo>
          <span>R$</span>
          <span>{coffeePrice}</span>
          <div>
            <button onClick={handleRemoveAmount}>
              <Minus size={20} />
            </button>
            <p>{coffeeAmount}</p>
            <button onClick={handleAddAmount}>
              <Plus size={20} />
            </button>
          </div>
          <AddCartButton onClick={handleAddToCart}>
            <ShoppingCartSimple size={38} weight="fill" />
          </AddCartButton>
        </BuyInfo>
      </Content>
    </CoffeeContainer>
  );
}
