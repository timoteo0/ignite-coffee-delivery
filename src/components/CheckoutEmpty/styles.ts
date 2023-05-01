import styled from "styled-components";

export const CheckoutEmptyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  svg {
    color: ${(props) => props.theme["yellow-700"]};
    margin-bottom: 2rem;
  }

  h3 {
    font-family: "Baloo 2";
    color: ${(props) => props.theme["brown-600"]};
  }
`;
