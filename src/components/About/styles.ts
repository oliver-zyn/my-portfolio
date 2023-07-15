import { styled } from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  margin-top: 10rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 2px;

  div.profileImg {
    width: 100%;

    img {
      height: 450px;
      object-fit: cover;
      border-radius: 2px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    img {
      max-width: none;
      height: 350px !important;
      width: 100%;
    }
  }
`

export const BodyAbout = styled.div`
  & > div:first-child {
    & > span {
      font-size: 1.25rem;
      margin: 0;
    }

    h1 {
      font-size: 2.5rem;
      margin: 0;
    }
  }

  & > div.aboutTextList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 0;

    p {
      color: ${(props) => props.theme['gray-100']};
      line-height: 1.7;
    }

    strong {
      color: ${(props) => props.theme['light-blue']};
      font-weight: 400;
    }
  }

  & > div.aboutCardList {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`
