import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 5rem;
  opacity: 0;
  animation: onload-title-anim 1s ease forwards;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 0.94rem;
      transition: color 0.2s;
      position: relative;
      line-height: 2;

      &:is(:hover, :focus) {
        color: ${(props) => props.theme['text-base']};
      }

      &:is(:hover, :focus)::after {
        width: 100%;
        left: 0%;
      }

      &::after {
        content: '';
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: ${(props) => props.theme['text-base']};
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 0.2s;
        transition-property: width, left;
      }
    }
  }

  @keyframes onload-header-anim {
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

export const Logo = styled.div`
  color: ${(props) => props.theme['light-blue']};
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05rem;
  text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme['gray-100']};
  transition: color 0.2s;

  &:is(:hover, :focus) {
    color: ${(props) => props.theme['text-base']};
  }
`
