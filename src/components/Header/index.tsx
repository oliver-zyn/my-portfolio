import { Lightning, Moon } from 'phosphor-react'
import { HeaderContainer, Icon, ThemeButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Icon>
        <Lightning weight="duotone" size={40} />
      </Icon>

      <nav>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
        <ThemeButton>
          <Moon size={30} />
        </ThemeButton>
      </nav>
    </HeaderContainer>
  )
}
