import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.94rem;
    line-height: 0;
  }
`

export const Icon = styled.div`
  color: ${(props) => props.theme['light-blue']};
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme['gray-100']};
`
