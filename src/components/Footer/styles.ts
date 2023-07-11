import { styled } from 'styled-components'

export const FooterContainer = styled.section`
  width: 100%;
  margin-top: 10rem;

  border-top: 1px solid ${(props) => props.theme['gray-100']};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 0;

    h3 {
      padding-bottom: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const Logo = styled.div`
  color: ${(props) => props.theme['light-blue']};
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05rem;
  text-shadow: 0px 0px 16px rgba(66, 211, 255, 0.25);
`
