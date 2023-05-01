import styled from "styled-components";

export const OrderedCoffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* 1.5 */
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};

  &:first-child {
    padding-top: 0rem;
  }

  & > div {
    display: flex;

    img {
      width: 64px;
      height: 64px;

      margin-right: 1.25rem;
    }

    span {
      color: ${(props) => props.theme["brown-600"]};
      margin-bottom: 0.25rem;
    }
  }
`;

export const OrderedAction = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["gray-300"]};
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.5rem;
    transition: 0.5s;

    &:hover {
      background: ${(props) => props.theme["gray-400"]};
    }

    svg {
      color: ${(props) => props.theme["purple-500"]};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme["purple-700"]};
      }
    }

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme["brown-400"]};
      text-transform: uppercase;
      cursor: pointer;
      margin: 0;
    }
  }
`;

export const Price = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme["brown-400"]};
`;
