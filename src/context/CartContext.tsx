import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../components/CoffeeList";

interface ProviderProps {
  children: ReactNode;
}

interface Cart {
  amount: number;
  coffee: Coffee;
}

interface AddressInfoData {
  cep: string;
  street: string;
  number: number;
  complement: string | null;
  district: string;
  city: string;
  uf: string;
}

interface CartContextType {
  cart: Cart[];
  active: string;
  paymentMethod: string;
  addressInfo: AddressInfoData[];
  addCoffee: (coffee: Coffee, amount: number) => void;
  updateCart: (data: Cart[]) => void;
  removeCoffee: (data: Cart[]) => void;
  deliveryAddress: (data: AddressInfoData) => void;
  paymentMethodChange: (data: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

const defaultAddress = {
  cep: "",
  street: "",
  number: 0,
  complement: "",
  district: "",
  city: "",
  uf: "",
};

export function CartContextProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    const savedCart = localStorage.getItem(
      "@coffee-delivery:cart-coffee-1.0.0"
    );

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });
  const [addressInfo, setAddressInfo] = useState<AddressInfoData[]>([
    defaultAddress,
  ]);
  const [active, setActive] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const stateJSON = JSON.stringify(cart);

    localStorage.setItem("@coffee-delivery:cart-coffee-1.0.0", stateJSON);
  }, [cart]);

  function paymentMethodChange(data: string) {
    switch (data) {
      case "creditCard":
        setActive(data);
        setPaymentMethod("Cartão de crédito");
        break;
      case "debitCard":
        setActive(data);
        setPaymentMethod("Cartão de débito");
        break;
      case "money":
        setActive(data);
        setPaymentMethod("Dinheiro");
        break;
    }
  }

  function addCoffee(coffee: Coffee, amount: number) {
    const existingCoffee = cart.find((item) => item.coffee.id === coffee.id);

    if (existingCoffee) {
      existingCoffee.amount += amount;
      return setCart([...cart]);
    }

    const orderedCoffee = {
      coffee,
      amount,
    };

    setCart((state) => [...state, orderedCoffee]);
  }

  function updateCart(data: Cart[]) {
    setCart(data);
  }

  function removeCoffee(data: Cart[]) {
    setCart(data);
  }

  function clearCart() {
    setCart([]);
  }

  function deliveryAddress(data: AddressInfoData) {
    setAddressInfo([data]);
  }

  return (
    <CartContext.Provider
      value={{
        addCoffee,
        cart,
        updateCart,
        removeCoffee,
        deliveryAddress,
        addressInfo,
        paymentMethodChange,
        active,
        paymentMethod,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
