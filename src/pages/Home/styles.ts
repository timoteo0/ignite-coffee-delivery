import styled from "styled-components";

export const HomeContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["brown-600"]};
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 0;

  div {
    width: 36.75rem;
  }
`;

export const TitleContainer = styled.div`
  h2 {
    font-size: 3rem;
    font-family: "Baloo 2";
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["brown-800"]};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-600"]};
    line-height: 130%;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 4.125rem;

  span {
    color: ${(props) => props.theme["brown-400"]};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    svg {
      padding: 0.5rem;
      color: ${(props) => props.theme["white-100"]};
      border-radius: 50%;

      &[id="yellow-dark"] {
        background-color: ${(props) => props.theme["yellow-700"]};
      }

      &[id="brown-dark"] {
        background-color: ${(props) => props.theme["brown-400"]};
      }

      &[id="yellow"] {
        background-color: ${(props) => props.theme["yellow-500"]};
      }

      &[id="purple"] {
        background-color: ${(props) => props.theme["purple-500"]};
      }
    }
  }
`;

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 9.8rem;
`;
