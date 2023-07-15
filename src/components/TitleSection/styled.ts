import { styled } from 'styled-components'

export const TitleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    color: ${(props) => props.theme['light-blue']};
    font-size: 1.5rem;
    font-family: 'Roboto Mono', monospace;
    text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
    margin: auto;
  }

  & > h1 {
    color: ${(props) => props.theme['text-base']};
    font-size: 3.5rem;
    display: flex;
    margin: auto;
  }
`
