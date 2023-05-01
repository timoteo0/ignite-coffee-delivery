import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeCup from "../../assets/coffee-img.svg";
import { CoffeeList } from "../../components/CoffeeList";
import { coffees } from "../../product";

import {
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <TitleContainer>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <ItemsContainer>
            <span>
              <ShoppingCart size={32} weight="fill" id="yellow-dark" />
              Compra simples e segura
            </span>
            <span>
              <Package size={32} weight="fill" id="brown-dark" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Timer size={32} weight="fill" id="yellow" />
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={32} weight="fill" id="purple" />O café chega
              fresquinho até você
            </span>
          </ItemsContainer>
        </div>
        <img src={coffeeCup} alt="" />
      </IntroContainer>

      <div>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffees.map((coffee) => (
            <CoffeeList key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </div>
    </HomeContainer>
  );
}
