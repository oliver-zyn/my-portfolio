import { Fade } from 'react-awesome-reveal'
import { BodyContact, ContactContainer } from './styles'
import { TitleSection } from '../TitleSection'

export function Contact() {
  const titleContactArray = [
    'C',
    'o',
    'n',
    't',
    'a',
    't',
    'e',
    '-',
    'm',
    'e',
    '!',
  ]

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <ContactContainer id="contact">
        <TitleSection
          subtitle="Contatos"
          titleLetterArray={titleContactArray}
        />
        <BodyContact>
          <form action="">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea
              cols={30}
              rows={15}
              placeholder="Mensagem"
              maxLength={200}
              required
            ></textarea>
            <button>Enviar mensagem</button>
          </form>
        </BodyContact>
      </ContactContainer>
    </Fade>
  )
}
