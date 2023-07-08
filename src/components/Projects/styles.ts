import { styled } from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
`

export const TitleProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

export const BodyProjects = styled.div`
  padding-top: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
`
