import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 6rem;

  .title-home {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    animation: onload-title-anim 1s ease forwards;

    & > span:first-child {
      color: var(--light-blue);
      font-size: 2.1rem;
      font-family: "Roboto Mono", monospace;
    }

    & > span:last-child {
      color: var(--gray-100);
      font-size: 3.5rem;
      font-weight: 600;
      display: flex;
    }

    & > h1 {
      color: var(--white);
      font-size: 5rem;
      display: flex;
    }
  }

  .button-home {
    background: transparent;
    border: 1px solid var(--light-blue);
    color: var(--light-blue);
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    margin-top: 2rem;
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
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--light-blue);
      transition: 0.5s ease;
      display: block;
      right: 300px;
      z-index: -1;
    }

    &:hover::before {
      right: 0;
    }

    &:hover {
      color: #000;
    }
  }

  .social-home {
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

    div {
      opacity: 0;
    }

    div:first-child {
      animation: onload-social-anim 1s 1s ease forwards;
    }

    div:nth-child(2) {
      animation: onload-social-anim 1s 1.3s ease forwards;
    }

    div:nth-child(3) {
      animation: onload-social-anim 1s 1.6s ease forwards;
    }

    div:nth-child(4) {
      animation: onload-social-anim 1s 1.9s ease forwards;
    }

    svg:hover {
      color: var(--white);
      transform: translateY(-3px);
    }
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
`;
