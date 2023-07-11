import { Fade } from 'react-awesome-reveal'
import { BodyContact, ContactContainer, TitleContact } from './styles'
import { LetterAnimate } from '../LetterAnimate'
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from 'phosphor-react'

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
        <TitleContact>
          <span>Contato</span>
          <h1>
            {titleContactArray.map((letter, index) => {
              return letter === ' ' ? (
                <span key={index}>{'\u00A0'}</span>
              ) : (
                <LetterAnimate key={index}>{letter}</LetterAnimate>
              )
            })}
          </h1>
        </TitleContact>
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
          <aside>
            <div>
              <h3>
                Email <EnvelopeSimple size={22} />
              </h3>
              <a
                href="mailto:olivermayer15@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                olivermayer15@gmail.com
              </a>
            </div>
            <div>
              <h3>
                Linkedin <LinkedinLogo size={22} />
              </h3>
              <a
                href="https://www.linkedin.com/in/oliverzyn"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/oliverzyn
              </a>
            </div>
            <div>
              <h3>
                Github <GithubLogo size={22} />
              </h3>
              <a
                href="https://github.com/oliver-zyn"
                target="_blank"
                rel="noreferrer"
              >
                github.com/oliver-zyn
              </a>
            </div>
          </aside>
        </BodyContact>
      </ContactContainer>
    </Fade>
  )
}
