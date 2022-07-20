import styled from "styled-components";

export const ContainerHome = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
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
`;
