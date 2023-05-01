import { CurrencyDollar, Info, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import biker from "../../assets/biker.svg";

import { OrderInfo, SuccessContainer } from "./style";

export function Success() {
  const { addressInfo, paymentMethod } = useContext(CartContext);

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        {addressInfo.map((info) => {
          return (
            <OrderInfo key={info.cep}>
              <div>
                <MapPin size={32} id="purple" weight="fill" />
                <div>
                  <span>
                    Entrega em{" "}
                    <strong>
                      {info.street}, {info.number}{" "}
                    </strong>
                    {info.district} - {info.city}, {info.uf}
                  </span>
                </div>
              </div>
              <div>
                <Timer size={32} id="yellow" weight="fill" />
                <div>
                  <span>
                    Previsão de entrega <br /> <strong> 20 min - 30 min</strong>
                  </span>
                </div>
              </div>
              <div>
                <CurrencyDollar size={32} id="yellow-dark" weight="fill" />
                <div>
                  <span>
                    Pagamento na entrega <br />
                    <strong>{paymentMethod}</strong>
                  </span>
                </div>
              </div>
            </OrderInfo>
          );
        })}

        <img src={biker} alt="" />
      </div>
    </SuccessContainer>
  );
}
