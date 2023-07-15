import { styled } from 'styled-components'

export const AboutCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);

  svg {
    color: ${(props) => props.theme['light-blue']};
  }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
