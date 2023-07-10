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
  div.project-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 3rem;
    gap: 5rem;
  }

  div.project-list {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
  }
`

interface FilterButtonProps {
  active: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  all: unset;
  border-radius: 2px;
  padding: 0.7rem 1.7rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) =>
    props.active ? props.theme['text-base'] : props.theme['gray-100']};
  border-bottom: 1px solid
    ${(props) =>
      props.active ? props.theme['light-blue'] : props.theme['gray-600']};
  cursor: pointer;

  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${(props) => props.theme['text-base']};
  }
`
