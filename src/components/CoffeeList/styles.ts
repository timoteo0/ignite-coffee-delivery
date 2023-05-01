import styled from "styled-components";

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  padding: 1.25rem 1.5rem;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: -40px;

  img {
    margin-bottom: 0.75rem;
  }

  span {
    color: ${(props) => props.theme["yellow-700"]};
    background: ${(props) => props.theme["yellow-200"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-weight: bold;
    font-size: 0.625rem;
    text-transform: uppercase;
    margin: 0 0.25rem;
  }

  h3 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-600"]};
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["brown-300"]};
    margin-bottom: 2.063rem;
  }
`;

export const BuyInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "Baloo 2";
    font-weight: bold;
    background: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme["brown-400"]};
    padding: 0;
    margin: 0;

    &:first-child {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      background: none;
      color: ${(props) => props.theme["brown-400"]};
      font-weight: 400;
      padding: 0;
      margin-right: 0.313rem;
    }
  }

  div {
    background: ${(props) => props.theme["gray-300"]};
    width: 4.5rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin: 0 0.5rem 0 1.438rem;
    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme["gray-400"]};
    }

    button {
      background: none;

      border: none;
      padding: 0.75rem 0.5rem;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme["purple-500"]};

        &:hover {
          color: ${(props) => props.theme["purple-700"]};
        }
      }
    }

    p {
      color: ${(props) => props.theme["brown-800"]};
    }
  }
`;

export const AddCartButton = styled.button`
  background: none;
  border: none;

  svg {
    color: ${(props) => props.theme["white-500"]};
    background: ${(props) => props.theme["purple-700"]};
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme["purple-500"]};
    }
  }
`;
