import { AboutContainer, BodyAbout } from './styles'
import { Brain, ChatsCircle, Palette, UsersThree } from 'phosphor-react'

import { AboutCard } from '../AboutCard'
import { Fade } from 'react-awesome-reveal'
import { TitleSection } from '../TitleSection'
import profileImg from '../../assets/profile.jpg'

export function About() {
  const titleAboutArray = ['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <AboutContainer id="about" className="about-section">
        <div className="profileImg">
          <img loading="lazy" src={profileImg} alt="Imagem de Oliver" />
        </div>

        <BodyAbout>
          <div className="title-wrapper">
            <TitleSection
              subtitle="Quem sou?"
              titleLetterArray={titleAboutArray}
            />
          </div>

          <div className="aboutTextList">
            <div className="text-card">
              <p>
                Me chamo Oliver, tenho 19 anos e sou um jovem entusiasta na área
                de tecnologia com pouco mais de 3 anos de experiência.
                Atualmente sou desenvolvedor na Linx Sponte, colaborando no
                desenvolvimento de soluções inovadoras para escolas de idiomas.
              </p>
            </div>

            <div className="text-card">
              <p>
                Sempre em busca de aplicar as melhores práticas de
                desenvolvimento para entregar produtos de qualidade e
                experiências incríveis. Principais tecnologias:{' '}
                <strong>React</strong>, <strong>Next</strong>,{' '}
                <strong>Node</strong>, <strong>TailwindCSS</strong>,{' '}
                <strong>TypeScript</strong> e <strong>.NET</strong>.
              </p>
            </div>
          </div>

          <div className="aboutCardList">
            <AboutCard
              icon={<ChatsCircle size={28} />}
              title="Comunicação Efetiva"
            />
            <AboutCard
              icon={<Palette size={28} />}
              title="Pensamento Criativo"
            />
            <AboutCard
              icon={<UsersThree size={28} />}
              title="Trabalho em Equipe"
            />
            <AboutCard icon={<Brain size={28} />} title="Adaptabilidade" />
          </div>
        </BodyAbout>
      </AboutContainer>
    </Fade>
  )
}
