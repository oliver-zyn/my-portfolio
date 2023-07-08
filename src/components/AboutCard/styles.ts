import { styled } from 'styled-components'

export const AboutCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    'icon title'
    'icon description';
  align-items: center;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 2px;
  padding: 2rem;

  svg {
    grid-area: icon;
    color: ${(props) => props.theme['light-blue']};
  }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.text {
    padding-left: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
    grid-area: title;
  }

  p {
    grid-area: description;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.7;
    font-size: 0.95rem;
  }
`
