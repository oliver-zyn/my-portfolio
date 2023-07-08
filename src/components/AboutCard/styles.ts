import { styled } from 'styled-components'

export const AboutCardContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    'icon title'
    'icon description';

  background: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  border-bottom: 1px solid ${(props) => props.theme['text-base']};
  transition: border-color 0.2s;
  cursor: default;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['light-blue']};
  }

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
