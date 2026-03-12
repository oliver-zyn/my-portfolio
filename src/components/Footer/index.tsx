import { FooterContainer, Logo } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <div>
        <span>
          <h3>Oliver Mayer</h3>
          <p>Copyright © {currentYear}. Todos os direitos reservados</p>
        </span>

        <Logo>{'{ oliver }'}</Logo>
      </div>
    </FooterContainer>
  )
}
