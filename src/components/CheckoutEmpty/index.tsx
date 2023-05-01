import { ShoppingCart } from "phosphor-react";
import { CheckoutEmptyContainer } from "./styles";

export function CheckoutEmpty() {
  return (
    <CheckoutEmptyContainer>
      <ShoppingCart size={100} />
      <h3>Você ainda não adicionou nenhum café no seu carrinho!</h3>
    </CheckoutEmptyContainer>
  );
}
