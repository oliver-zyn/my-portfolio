// import { Moon } from 'phosphor-react'

import { HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>{'{ oliver }'}</Logo>

      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
        {/* <ThemeButton>
          <Moon size={30} />
        </ThemeButton> */}
      </nav>
    </HeaderContainer>
  )
}
