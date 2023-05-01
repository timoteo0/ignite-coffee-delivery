import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CoffeeListCheckout } from "../../components/CoffeeListCheckout";
import { CheckoutEmpty } from "../../components/CheckoutEmpty";
import { AddressForm } from "../../components/AddressForm";
import { formatCurrency } from "../../utils/formatCurrency";

import {
  CheckoutContainer,
  PaymentContainer,
  PaymentOptions,
  SelectedCoffees,
  AmountContainer,
  ConfirmOrder,
  ErrorMessage,
} from "./styles";

export function Checkout() {
  const { paymentMethodChange, active, paymentMethod, cart } =
    useContext(CartContext);

  const deliveryPrice = 3.5;
  const totalCoffeesPrice = cart.reduce(
    (acc, { coffee, amount }) => coffee.price * amount + acc,
    0
  );
  const finalCoffeesPrice = totalCoffeesPrice + deliveryPrice;

  function handlePaymentMethod(paymentMethodString: string) {
    paymentMethodChange(paymentMethodString);
  }

  return (
    <>
      <CheckoutContainer>
        <div>
          <h2>Complete seu pedido</h2>

          <AddressForm />

          <PaymentContainer>
            <div>
              <CurrencyDollar size={18} weight="fill" />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <PaymentOptions>
              <div
                onClick={() => handlePaymentMethod("creditCard")}
                className={active == "creditCard" ? "active" : ""}
              >
                <CreditCard size={32} />
                Cartão de crédito
              </div>
              <div
                onClick={() => handlePaymentMethod("debitCard")}
                className={active == "debitCard" ? "active" : ""}
              >
                <Bank size={32} />
                cartão de débito
              </div>
              <div
                onClick={() => handlePaymentMethod("money")}
                className={active == "money" ? "active" : ""}
              >
                <Money size={32} />
                dinheiro
              </div>
            </PaymentOptions>

            {paymentMethod === "" ? (
              <ErrorMessage>Selecione uma forma de pagamento</ErrorMessage>
            ) : (
              ""
            )}
          </PaymentContainer>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffees>
            {cart.length === 0 ? (
              <CheckoutEmpty />
            ) : (
              <div>
                {cart.map((item) => {
                  return (
                    <CoffeeListCheckout item={item} key={item.coffee.id} />
                  );
                })}

                <AmountContainer>
                  <div>
                    <span>Total de itens</span>
                    <span>{formatCurrency(totalCoffeesPrice)}</span>
                  </div>
                  <div>
                    <span>Entrega</span>
                    <span>{formatCurrency(3.5)}</span>
                  </div>
                  <div>
                    <span>Total</span>
                    <span>{formatCurrency(finalCoffeesPrice)}</span>
                  </div>
                </AmountContainer>

                <ConfirmOrder type="submit" form="addressForm">
                  confirmar pedido
                </ConfirmOrder>
              </div>
            )}
          </SelectedCoffees>
        </div>
      </CheckoutContainer>
    </>
  );
}
