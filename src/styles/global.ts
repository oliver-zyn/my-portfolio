import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme['gray-700']};
    background: 
      radial-gradient(circle at 20% 80%, rgba(66, 211, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(66, 211, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(66, 211, 255, 0.03) 0%, transparent 50%),
      linear-gradient(135deg, rgba(15,15,15,1) 0%, rgba(9,9,10,1) 71%);
    color: ${(props) => props.theme['text-base']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(600px circle at 50% 200px, rgba(66, 211, 255, 0.03), transparent),
        radial-gradient(800px circle at 80% 800px, rgba(66, 211, 255, 0.02), transparent),
        radial-gradient(400px circle at 20% 600px, rgba(66, 211, 255, 0.04), transparent);
      pointer-events: none;
      z-index: -1;
      animation: gradientShift 20s ease-in-out infinite;
    }

    @keyframes gradientShift {
      0%, 100% {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      50% {
        opacity: 0.8;
        transform: translateX(20px) translateY(-20px);
      }
    }
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

  :focus {
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Custom Scrollbar with gradient */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${(props) =>
      props.theme['light-blue']}, #00a8ff);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    box-shadow: 0 0 10px rgba(66, 211, 255, 0.5);
    background: linear-gradient(135deg, #00a8ff, ${(props) =>
      props.theme['light-blue']});
  }

  /* Selection with gradient */
  ::selection {
    background: linear-gradient(135deg, rgba(66, 211, 255, 0.3), rgba(0, 168, 255, 0.3));
    color: ${(props) => props.theme['text-base']};
  }

  /* Smooth animations */
  * {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  /* Loading animation for images */
  img {
    transition: opacity 0.3s ease;
  }

  img[loading="lazy"] {
    opacity: 0;
    animation: fadeInImage 0.5s ease forwards;
  }

  @keyframes fadeInImage {
    to {
      opacity: 1;
    }
  }

  /* Pulse animation utility */
  .pulse {
    animation: pulseGlow 2s infinite;
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(66, 211, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(66, 211, 255, 0.5);
    }
  }

  /* Gradient text utility */
  .text-gradient {
    background: linear-gradient(135deg, ${(props) =>
      props.theme['text-base']}, ${(props) => props.theme['light-blue']});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Gradient button utility */
  .gradient-button {
    background: linear-gradient(135deg, ${(props) =>
      props.theme['light-blue']}, #00a8ff);
    border: none;
    color: ${(props) => props.theme['gray-700']};
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #00a8ff, #0080cc);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(66, 211, 255, 0.4);
    }
  }

  /* Loading spinner */
  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(66, 211, 255, 0.3);
    border-top: 2px solid ${(props) => props.theme['light-blue']};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive typography */
  @media (max-width: 900px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 81.25%;
    }
  }

  /* Progress bar at top */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${(props) =>
      props.theme['light-blue']}, #00a8ff);
    transform-origin: left;
    z-index: 1000;
  }
`
