import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        font-family:'Roboto',sans-serif;
        background: ${(props) => props.theme["white-100"]};
        font-size:1rem;
    }


`;
