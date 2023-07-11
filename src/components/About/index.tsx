import { Brain, ChatsCircle, Palette, UsersThree } from 'phosphor-react'
import { AboutCard } from '../AboutCard'
import { LetterAnimate } from '../LetterAnimate'
import { AboutContainer, BodyAbout, TitleAbout } from './styles'
import { Fade } from 'react-awesome-reveal'

export function About() {
  const titleAboutArray = ['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <AboutContainer id="about">
        <TitleAbout>
          <span>Quem sou?</span>
          <h1>
            {titleAboutArray.map((letter, index) => {
              return letter === ' ' ? (
                <span key={index}>{'\u00A0'}</span>
              ) : (
                <LetterAnimate key={index}>{letter}</LetterAnimate>
              )
            })}
          </h1>
        </TitleAbout>
        <BodyAbout>
          <p>
            Sou um desenvolvedor frontend apaixonado por criar experiências
            digitais incríveis. Com habilidades sólidas em HTML, CSS e
            JavaScript, estou sempre buscando aprender e aplicar novas
            tecnologias para melhorar o desenvolvimento web. Minha paixão pela
            programação começou durante a faculdade e, desde então, venho
            trabalhando em diversos projetos desafiadores.
          </p>
          <div>
            <AboutCard
              icon={<ChatsCircle size={80} />}
              title="Comunicação Efetiva"
              description="Capacidade de transmitir ideias de forma clara e concisa."
            />
            <AboutCard
              icon={<Palette size={80} />}
              title="Pensamento Criativo"
              description="Abordagem criativa na resolução de problemas, buscando soluções inovadoras."
            />
            <AboutCard
              icon={<UsersThree size={80} />}
              title="Trabalho em Equipe"
              description="Habilidade em trabalhar de forma colaborativa, contribuindo e ouvindo ideias."
            />
            <AboutCard
              icon={<Brain size={80} />}
              title="Adaptabilidade"
              description="Adaptar-se rapidamente a novas tecnologias e requisitos do projeto."
            />
          </div>
        </BodyAbout>
      </AboutContainer>
    </Fade>
  )
}
