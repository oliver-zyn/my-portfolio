import { Brain, ChatsCircle, Palette, UsersThree } from 'phosphor-react'
import { AboutCard } from '../AboutCard'
import { AboutContainer, BodyAbout } from './styles'
import { Fade } from 'react-awesome-reveal'
import { TitleSection } from '../TitleSection'
import profileImg from '../../assets/profile.png'

export function About() {
  const titleAboutArray = ['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <AboutContainer id="about">
        <div className="profileImg">
          <img src={profileImg} alt="Imagem de Oliver" />
        </div>
        <BodyAbout>
          <TitleSection
            subtitle="Quem sou?"
            titleLetterArray={titleAboutArray}
          />
          <div className="aboutTextList">
            <p>
              Me chamo Oliver, sou um jovem entusiasta na área de tecnologia com
              pouco mais de 2 anos de experiência. Atualmente sou desenvolvedor
              na Linx Sponte, colaborando no desenvolvimento de soluções
              inovadoras para escolas de idiomas.
            </p>
            <p>
              Sempre em busca de aplicar as melhores práticas de desenvolvimento
              para entregar produtos de qualidade e experiências incríveis.
              Principais tecnologias: <strong>React</strong>,{' '}
              <strong>Node</strong>, <strong>TailwindCSS</strong>,{' '}
              <strong>TypeScript</strong> e <strong>.NET</strong>.
            </p>
          </div>
          <div className="aboutCardList">
            <AboutCard
              icon={<ChatsCircle size={40} />}
              title="Comunicação Efetiva"
            />
            <AboutCard
              icon={<Palette size={40} />}
              title="Pensamento Criativo"
            />
            <AboutCard
              icon={<UsersThree size={40} />}
              title="Trabalho em Equipe"
            />
            <AboutCard icon={<Brain size={40} />} title="Adaptabilidade" />
          </div>
        </BodyAbout>
      </AboutContainer>
    </Fade>
  )
}
