import { FooterContainer, Logo } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <span>
          <h3>Oliver Mayer</h3>
          <p>Copyright © 2023. Todos os direitos reservados</p>
        </span>

        <Logo>{'{ oliver }'}</Logo>
      </div>
    </FooterContainer>
  )
}
