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
      h1,
      button {
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

  & > h1 {
    color: ${(props) => props.theme['text-base']};
    font-size: 5.5rem;
    display: flex;
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
`

export const ButtonHome = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme['light-blue']};
  color: ${(props) => props.theme['light-blue']};
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  border-radius: 2px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  transition: 0.5s ease;
  opacity: 0;
  animation: onload-button-anim 1s 0.5s ease forwards;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme['light-blue']};
    transition: 0.5s ease;
    display: block;
    right: 300px;
    z-index: -1;
  }

  &:hover::before,
  &:focus::before {
    right: 0;
  }

  &:hover,
  &:focus {
    color: #000;
  }

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
