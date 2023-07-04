import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['background-gradient']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
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
