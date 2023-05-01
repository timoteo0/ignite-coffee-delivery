import styled from "styled-components";

export const FormContainer = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  max-width: 35rem;
  padding: 2.5rem;
  border-radius: 6px;
`;

export const TitleForm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-700"]};
  }

  div {
    span {
      color: ${(props) => props.theme["brown-600"]};
    }
    p {
      margin-top: 0.125rem;
      color: ${(props) => props.theme["brown-400"]};
    }
  }

  p {
    font-size: 0.875rem;
  }
`;

export const FormStyle = styled.form`
  margin-top: 2rem;

  input {
    width: 100%;
    font-size: 0.875rem;
    color: ${(props) => props.theme["brown-400"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: 6px;
    background: #eeeded;

    &[id="uf"] {
      width: 60px;
      height: 42px;
      text-transform: uppercase;
    }

    &[id="number"] {
      width: 200px;
    }

    &:focus {
      outline-color: ${(props) => props.theme["yellow-700"]};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme["brown-300"]};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;

export const InputComplement = styled.div`
  position: relative;
  flex: 1;

  span {
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 12px;
    font-style: italic;
    font-size: 0.875rem;
    color: ${(props) => props.theme["brown-300"]};
  }
`;

export const FormError = styled.span`
  color: #ef233c;
  font-size: 0.8rem;
`;
