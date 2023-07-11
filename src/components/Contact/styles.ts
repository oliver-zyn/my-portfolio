import { styled } from 'styled-components'

export const ContactContainer = styled.section`
  width: 100%;
  padding-top: 10rem;
`

export const TitleContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  & > span {
    color: ${(props) => props.theme['light-blue']};
    font-size: 1.5rem;
    font-family: 'Roboto Mono', monospace;
    text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
  }

  & > h1 {
    color: ${(props) => props.theme['text-base']};
    font-size: 3.1rem;
    display: flex;
  }
`

export const BodyContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  gap: 5rem;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 27.125rem;
    gap: 1rem;

    input,
    textarea {
      all: unset;
      background: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      border-bottom: 1px solid ${(props) => props.theme['gray-600']};
      border-radius: 2px;

      transition: color 0.2s, border-color 0.2s;

      &:focus {
        border-color: ${(props) => props.theme['light-blue']};
      }
    }

    button {
      all: unset;
      max-width: 11rem;
      background: transparent;
      border: 1px solid ${(props) => props.theme['light-blue']};
      color: ${(props) => props.theme['light-blue']};
      padding: 1.2rem 1rem;
      font-size: 1rem;
      border-radius: 2px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      font-weight: 500;
      transition: 0.5s ease;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme['light-blue']};
        transition: 0.5s ease;
        display: block;
        right: 300px;
        z-index: -1;
      }

      &:is(:hover, :focus)::before {
        right: 0;
      }

      &:is(:hover, :focus) {
        color: ${(props) => props.theme['gray-600']};
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 27.125rem;

    & > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1rem;
      padding: 2rem;
      background: ${(props) => props.theme['gray-600']};
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
      border-radius: 2px;
      border-bottom: 1px solid ${(props) => props.theme['text-base']};
      transition: border-color 0.2s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['light-blue']};
      }

      h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        padding-bottom: 0.7rem;
      }

      a {
        transition: color 0.2s;

        &:is(:hover, :focus) {
          color: ${(props) => props.theme['text-base']};
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: normal;
    gap: 5rem;

    aside {
      align-items: normal;
    }
  }
`
