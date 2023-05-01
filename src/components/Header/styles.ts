import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  div {
    display: flex;

    button {
      border: none;
      color: ${(props) => props.theme["yellow-700"]};
      background: ${(props) => props.theme["yellow-200"]};
      border-radius: 6px;
      padding: 0.5rem;
      margin-left: 0.75rem;
      cursor: pointer;
      position: relative;
    }

    p {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      right: 0;
      background: ${(props) => props.theme["yellow-700"]};
      color: ${(props) => props.theme["white-500"]};
      border-radius: 50%;
      padding: 3px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: -0.06em;
      margin-right: -9px;
      margin-top: -9px;
    }
  }
`;

export const LocationContainer = styled.div`
  background: ${(props) => props.theme["purple-100"]};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme["purple-700"]};
`;
