import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import {
  FormContainer,
  FormError,
  FormStyle,
  InputComplement,
  TitleForm,
} from "./styles";
import { CartContext } from "../../context/CartContext";

// interface AddressInfoData {
//   cep: number | null;
//   street: string;
//   number: number;
//   complement?: string;
//   district: string;
//   city: string;
//   uf: string;
// }

const deliveryAddressValidationSchema = zod.object({
  cep: zod.string().min(8),
  street: zod.string().min(4),
  number: zod.number().min(1),
  complement: zod.string().nullable(),
  district: zod.string().min(3),
  city: zod.string().min(3),
  uf: zod.string().min(2).max(2),
});

type deliveryAddressData = zod.infer<typeof deliveryAddressValidationSchema>;

export function AddressForm() {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<deliveryAddressData>({
    resolver: zodResolver(deliveryAddressValidationSchema),
  });
  const [cepValue, setCepValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const { deliveryAddress, clearCart, paymentMethod } = useContext(CartContext);

  const navigate = useNavigate();

  function checkCep(event: React.FocusEvent<HTMLInputElement>) {
    const cep = event.target.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("street", data.logradouro);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("number");

        setInputDisabled(true);
      })
      .catch((err) => console.log(err));

    setCepValue(cep);
    setValue("street", "");
    setValue("district", "");
    setValue("city", "");
    setValue("uf", "");
    setInputDisabled(false);
  }

  function handleDeliveryAddress(data: deliveryAddressData) {
    const addressData = {
      cep: cepValue,
      street: data.street,
      number: data.number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      uf: data.uf,
    };

    if (paymentMethod !== "") {
      deliveryAddress(addressData);
      clearCart();
      navigate("/success");
    }
  }

  return (
    <FormContainer>
      <TitleForm>
        <MapPinLine size={24} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleForm>

      <FormStyle
        onSubmit={handleSubmit(handleDeliveryAddress)}
        id="addressForm"
      >
        <input
          required
          type="text"
          placeholder="CEP"
          {...register("cep")}
          onBlur={checkCep}
        />

        <input
          required
          type="text"
          placeholder="Rua"
          {...register("street")}
          disabled={inputDisabled === true}
        />

        <div>
          <input
            required
            id="number"
            type="number"
            placeholder="Número"
            {...register("number", { valueAsNumber: true })}
          />

          <InputComplement>
            <input
              type="text"
              placeholder="Complemento"
              {...register("complement")}
            />
            <span>Opcional</span>
          </InputComplement>
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Bairro"
            {...register("district")}
            disabled={inputDisabled === true}
          />

          <input
            required
            type="text"
            placeholder="Cidade"
            {...register("city")}
            disabled={inputDisabled === true}
          />

          <input
            required
            id="uf"
            type="text"
            placeholder="UF"
            {...register("uf")}
            maxLength={2}
            disabled={inputDisabled === true}
          />
        </div>
      </FormStyle>
    </FormContainer>
  );
}
