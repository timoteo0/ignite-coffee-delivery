import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-700"]};
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-600"]};
  }
`;

export const OrderInfo = styled.div`
  width: 526px;
  padding: 2.5rem;
  margin-top: 2.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-start-start-radius: 6px;
    border-end-end-radius: 6px;
    border-start-end-radius: 36px;
    border-end-start-radius: 36px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme["yellow-500"]},
      ${(props) => props.theme["purple-500"]}
    );

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      padding: 0.5rem;
      color: ${(props) => props.theme["white-100"]};
      border-radius: 50%;

      &[id="purple"] {
        background: ${(props) => props.theme["purple-500"]};
      }

      &[id="yellow-dark"] {
        background: ${(props) => props.theme["yellow-700"]};
      }

      &[id="yellow"] {
        background: ${(props) => props.theme["yellow-500"]};
      }
    }

    span {
      width: 19.375rem;
      color: ${(props) => props.theme["brown-400"]};
    }
  }
`;
