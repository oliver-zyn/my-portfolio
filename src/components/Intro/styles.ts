import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 0;

  & > div:last-child {
    transition: 0.2s ease-in-out;
  }

  & > div:last-child:hover {
    transform: scale(1.04) rotate(1deg);
  }

  @media (max-width: 750px) {
    justify-content: center;
    text-align: center;

    & > div:first-child {
      width: 100%;

      h1,
      .button-group {
        margin: auto;
      }
    }
  }
`

export const TitleHome = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: onload-title-anim 1s 0.5s ease forwards;

  & > span:first-child {
    color: ${(props) => props.theme['light-blue']};
    font-size: 2.3rem;
    font-family: 'Roboto Mono', monospace;
    text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
  }

  & > span:last-child {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.1rem;
    padding: 1.4rem 0 1.7rem;
    line-height: 1.7;
    max-width: 32.5rem;
  }

  @keyframes onload-title-anim {
    0% {
      transform: translateY(-40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 750px) {
    align-items: center;

    & > span:first-child {
      font-size: 2rem;
    }

    & > span:last-child {
      text-align: center;
      max-width: 100%;
      padding: 1.2rem 0 1.5rem;
    }
  }
`

export const TypewriterName = styled.h1`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme['text-base']},
    ${(props) => props.theme['light-blue']},
    #00a8ff
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  font-size: 5.5rem;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  margin: 0;
  justify-content: flex-start;

  animation: typing 2s steps(9, end) 0.8s forwards,
    blink-caret 1s step-end 0.8s 3, gradientAnimation 3s ease-in-out 2s infinite;

  border-right: 3px solid ${(props) => props.theme['light-blue']};

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
      max-width: 27rem;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${(props) => props.theme['light-blue']};
    }
  }

  @keyframes gradientAnimation {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  animation-fill-mode: forwards;

  &::after {
    content: '';
    animation: removeBorder 0.1s 3s forwards;
  }

  @keyframes removeBorder {
    to {
      border-right: none;
    }
  }

  @media (max-width: 750px) {
    font-size: 4.5rem;
    justify-content: center;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 4.8rem;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: onload-button-anim 1s 0.5s ease forwards;

  @keyframes onload-button-anim {
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`

export const ButtonHome = styled.a`
  min-width: 11rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme['light-blue']};
  color: ${(props) => props.theme['light-blue']};
  padding: 1.1rem 2rem;
  font-size: 1rem;
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  backdrop-filter: blur(10px);
  background: rgba(66, 211, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme['light-blue']},
      #00a8ff
    );
    transition: all 0.3s ease;
    display: block;
    transform: translateY(100%);
    z-index: -1;
  }

  &:is(:hover, :focus) {
    color: ${(props) => props.theme['gray-700']};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(66, 211, 255, 0.3);

    &::before {
      transform: translateY(0);
    }
  }
`

export const ImageHome = styled.div`
  opacity: 0;
  animation: onload-svg-anim 1s 0.5s ease forwards;

  svg {
    width: 100%;
    min-width: 23rem;
    filter: drop-shadow(0 0 35px #42d3ff);
    animation: flicker-svg 5s infinite alternate,
      up-down-svg 5s infinite alternate ease-in-out;
  }

  @keyframes flicker-svg {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      opacity: 0.8;
    }

    20%,
    24%,
    55% {
      opacity: 1;
    }
  }

  @keyframes up-down-svg {
    0% {
      transform: translateY(-15px) rotate(0);
    }
    100% {
      transform: translateY(15px) rotate(6deg);
    }
  }

  @keyframes onload-svg-anim {
    0% {
      transform: translateX(40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 750px) {
    svg {
      display: none;
    }
  }
`
