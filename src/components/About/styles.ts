import { styled } from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  margin-top: 10rem;
  padding: 2rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;

  background: rgba(24, 24, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 211, 255, 0.2);
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: ${(props) => props.theme['light-blue']};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(66, 211, 255, 0.3) inset, 0 0 40px rgba(66, 211, 255, 0.15);
    transform: translateY(-4px);
  }

  div.profileImg {
    flex: 0 0 400px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      min-height: 500px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1.5rem;
    gap: 1.5rem;

    div.profileImg {
      flex: none;
      width: 100%;
      order: -1;

      img {
        height: 250px;
        min-height: auto;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

export const BodyAbout = styled.div`
  flex: 1;

  & > div.title-wrapper {
    & > div > span {
      font-size: 1.25rem;
      margin: 0;
    }

    & > div > h1 {
      font-size: 2.5rem;
      margin: 0;
    }
  }

  & > div.aboutTextList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;

    .text-card {
      background: rgba(24, 24, 26, 0.4);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(66, 211, 255, 0.2);
      border-radius: 12px;
      padding: 1.2rem;
      transition: all 0.3s ease;
      cursor: default;

      &:hover {
        border-color: ${(props) => props.theme['light-blue']};
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2),
          0 0 0 1px rgba(66, 211, 255, 0.2) inset;
        transform: translateY(-2px);
      }

      p {
        color: ${(props) => props.theme['gray-100']};
        line-height: 1.7;
        margin: 0;
      }

      strong {
        color: ${(props) => props.theme['light-blue']};
        font-weight: 500;
      }
    }
  }

  & > div.aboutCardList {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 900px) {
    & > div.title-wrapper {
      & > div {
        & > span {
          margin: 0 !important;
          text-align: left;
        }

        & > h1 {
          margin: 0 !important;
          justify-content: flex-start;
        }
      }
    }
  }
`
