import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-blue: #42D3FF;

    --gray-100: #CECECE;
    --gray-500: #29292e;
    --gray-700: #121214;
    --gray-900: #161616;
    /* --gray-gradient: linear-gradient(270deg,#121214,#09090a); */

    --white: #FAFAFA
  }

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
      background: var(--gray-900);
      background: radial-gradient(circle, rgba(22,24,24,1) 0%, rgba(9,9,10,1) 71%);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    a {
      text-decoration: none;
      color: var(--gray-100);
    }

    button {
        cursor: pointer;
    }

    [disabeld] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
