import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-700']};
    background: radial-gradient(circle, rgba(22,24,24,1) 0%, rgba(9,9,10,1) 71%);
    color: ${(props) => props.theme['text-base']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};
  }

  button {
    cursor: pointer;
  }

  [disabeld] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body::-webkit-scrollbar {
    width: .4em;
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['gray-100']};
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    html {
        font-size: 87.5%;
    }
  }
`
