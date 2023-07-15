import { styled } from 'styled-components'

export const ContactContainer = styled.section`
  width: 100%;
  margin-top: 7rem;
`

export const BodyContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  gap: 2rem;
  max-width: 800px;
  margin: auto;

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
      padding: 1.2rem 1.5rem;
      font-size: 1rem;
      border-radius: 2px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      font-weight: 500;
      transition: 0.5s ease;
      margin: auto;
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
`
