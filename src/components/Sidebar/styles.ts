import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerSidebar = styled.aside`
  background: var(--gray-700);
  width: 100%;
  max-width: 11rem;
  height: 100vh;
  border-right: 1px solid var(--gray-500);
  position: relative;
  opacity: 0;
  animation: onload-anim 2s ease forwards;
  margin-right: 6rem;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    border-bottom: 1px solid var(--gray-500);

    svg {
      color: var(--light-blue);
      animation: flicker 1.5s infinite alternate;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      filter: drop-shadow(0 0 7px var(--light-blue));
    }

    20%,
    24%,
    55% {
      filter: drop-shadow(0 0 0);
    }
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 1.5rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--gray-500);
  width: 100%;
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &.active {
    color: var(--light-blue);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }

  &.active::before {
    content: "";
    background: var(--light-blue);
    width: 0.2rem;
    height: 1.9rem;
    position: absolute;
    left: 0;
    animation: anim-active-link 0.4s ease forwards;
  }

  @keyframes anim-active-link {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes onload-anim {
    0% {
      right: 12rem;
      opacity: 0;
    }
    100% {
      right: 0;
      opacity: 1;
    }
  }
`;
