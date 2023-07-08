import { styled } from 'styled-components'

export const SocialLinksContainer = styled.aside`
  width: 100%;
  padding: 5rem 0;

  & > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      transition: color 0.2s, transform 0.2s ease-in-out;
      opacity: 0;
      animation: onload-social-icons-anim 1s 1.5s ease forwards;

      &:hover,
      &:focus {
        color: ${(props) => props.theme['text-base']};
        transform: translateY(-4px);
      }
    }

    &::before,
    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 1px;
      opacity: 0;
      background: ${(props) => props.theme['gray-100']};
      animation: onload-social-line-anim 1.5s 1s ease-out forwards;
    }
  }

  @keyframes onload-social-icons-anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes onload-social-line-anim {
    0% {
      opacity: 0;
      width: 0%;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }
`
