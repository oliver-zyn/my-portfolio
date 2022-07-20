import styled from "styled-components";

export const ContainerProjects = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.4rem;
  padding-right: 12rem;

  h1 {
    font-family: "Roboto Mono", monospace;
    color: var(--light-blue);
    font-weight: 400;
    text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
    font-size: 2.1rem;
    opacity: 0;
    animation: onload-title-anim 1s ease forwards;
  }

  & > div.projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;

    & > div {
      opacity: 0;
      animation: onload-project-anim 1s ease forwards;
    }

    & > div:first-child {
      animation-delay: 0s;
    }

    & > div:nth-child(2) {
      animation-delay: 0.2s;
    }

    & > div:nth-child(3) {
      animation-delay: 0.4s;
    }

    & > div:nth-child(4) {
      animation-delay: 0.6s;
    }

    & > div:nth-child(5) {
      animation-delay: 0.8s;
    }

    & > div:nth-child(6) {
      animation-delay: 1s;
    }
  }

  & > div.next {
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    animation: onload-project-anim 1s ease forwards;

    & > button:hover svg {
      transform: translateX(5px);
    }
  }

  & > div.back {
    opacity: 0;
    animation: onload-project-anim 1s ease forwards;

    & > button:hover svg {
      transform: translateX(-5px);
    }
  }

  button.page-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: var(--gray-100);
    gap: 0.5rem;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    svg {
      color: var(--light-blue);
      transition: transform 0.3s ease;
    }

    &:hover {
      color: var(--white);
    }
  }

  @keyframes onload-title-anim {
    0% {
      transform: translateY(-25px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes onload-project-anim {
    0% {
      transform: translateY(25px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
