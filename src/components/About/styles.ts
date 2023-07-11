import { styled } from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  padding-top: 10rem;
`

export const TitleAbout = styled.div`
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

export const BodyAbout = styled.div`
  & > p {
    color: ${(props) => props.theme['gray-100']};
    padding: 1.4rem 0 2rem;
    line-height: 1.7;
  }

  & > div {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`
