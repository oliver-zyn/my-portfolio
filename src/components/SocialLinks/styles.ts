import styled from "styled-components";

export const ContainerSocialLinks = styled.div`
  position: absolute;
  right: 6rem;

  .social {
    color: var(--gray-100);
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    .line-social {
      height: 7.1rem;
      width: 2px;
      background: var(--gray-100);
      border-radius: 2px;
      opacity: 0;
      animation: onload-line-anim 1s 0.8s ease forwards;
    }

    svg {
      transition: 0.3s ease;
      cursor: pointer;
    }

    a {
      opacity: 0;
    }

    a:first-child {
      animation: onload-social-anim 1s 1s ease forwards;
    }

    a:nth-child(2) {
      animation: onload-social-anim 1s 1.3s ease forwards;
    }

    a:nth-child(3) {
      animation: onload-social-anim 1s 1.6s ease forwards;
    }

    a:nth-child(4) {
      animation: onload-social-anim 1s 1.9s ease forwards;
    }

    svg:hover {
      color: var(--white);
      transform: translateY(-3px);
    }

    @keyframes onload-line-anim {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes onload-social-anim {
      0% {
        transform: translateY(-5px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;
