import styled from "styled-components";

export const ContainerProject = styled.div`
  & > div {
    width: 16rem;
    height: 11rem;
    background: var(--gray-700);
    border: 1px solid var(--gray-500);
    border-radius: 2px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 1px 2px 10px rgba(35, 35, 35, 0.5);
    }

    header {
      background: var(--gray-500);
      display: flex;
      align-items: center;
      padding: 0.4375rem;
      gap: 0.5rem;
      border-radius: 2px 2px 0 0;

      span {
        display: block;
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
      }

      span:first-child {
        background: #ff605c;
      }

      span:nth-child(2) {
        background: #ffbd44;
      }

      span:last-child {
        background: #00ca4e;
      }
    }

    & > div.have-project {
      position: relative;
      overflow: hidden;
      height: calc(100% - 20px);

      img {
        width: 100%;
      }

      & > div {
        width: 100%;
        position: absolute;
        bottom: -50px;
        transition: all 0.3s 0.1s ease;

        .links-project {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding-bottom: 0.7rem;

          a {
            background: var(--gray-100);
            color: var(--gray-700);
            padding: 0.45rem 0.45rem;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s ease;

            &:hover {
              transform: translateY(-3px);
              background: var(--white);
            }

            &.link-disabled {
              opacity: 0.8;
              cursor: not-allowed;
            }

            &.link-disabled:hover {
              transform: none;
            }
          }
        }
      }

      &:hover > div {
        bottom: 0;
      }
    }

    & > div.loading-project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100% - 20px);
      gap: 0.5rem;

      p {
        color: var(--gray-100);
        opacity: 0.4;
        font-size: 0.9rem;
      }

      .line-wobble {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.3rem;
        width: 5.5rem;
        border-radius: 2px;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
      }

      .line-wobble::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--gray-500);
        opacity: 0.3;
      }

      .line-wobble::after {
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 2px;
        animation: wobble 1.55s ease-in-out infinite;
        transform: translateX(-90%);
        background-color: var(--gray-500);
      }

      @keyframes wobble {
        0%,
        100% {
          transform: translateX(-90%);
        }

        50% {
          transform: translateX(90%);
        }
      }
    }
  }
`;
