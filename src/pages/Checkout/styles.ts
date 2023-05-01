import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    color: ${(props) => props.theme["brown-600"]};
    margin-bottom: 15px;
  }
`;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  max-width: 35rem;
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  & > div {
    display: flex;
    align-items: flex-start;

    p {
      color: ${(props) => props.theme["brown-400"]};
      font-size: 0.875rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #ef233c;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    width: 178px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme["brown-400"]};
    background: ${(props) => props.theme["gray-300"]};
    border-radius: 6px;
    margin-top: 2rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme["brown-600"]};
      background: ${(props) => props.theme["gray-400"]};
    }

    &.active {
      border: 1px solid ${(props) => props.theme["purple-500"]};
      background: ${(props) => props.theme["purple-100"]};
    }

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const SelectedCoffees = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  width: 100%;

  & > div {
    padding: 2.5rem;
  }
`;

export const AmountContainer = styled.div`
  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["brown-400"]};
    }

    &:last-child {
      margin-bottom: 0rem;

      span {
        font-weight: 700;
        color: ${(props) => props.theme["brown-600"]};
        font-size: 1.25rem;
      }
    }
  }
`;

export const ConfirmOrder = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  background: ${(props) => props.theme["yellow-500"]};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["white-500"]};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: 0.5s;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: ${(props) => props.theme["yellow-700"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
