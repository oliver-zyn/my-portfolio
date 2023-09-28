import { styled } from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  margin-top: 7rem;
`

export const BodyProjects = styled.div`
  div.project-filter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem 0 4rem;
    gap: 3rem;
  }

  div.project-list {
    display: grid;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
  }
`

interface FilterButtonProps {
  active: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  all: unset;
  width: 5.6rem;
  text-align: center;
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

  &:is(:hover, :focus) {
    color: ${(props) => props.theme['text-base']};
  }
`
