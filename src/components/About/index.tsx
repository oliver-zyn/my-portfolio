import { AboutContainer, BodyAbout } from './styles'
import { Brain, ChatsCircle, Palette, UsersThree } from 'phosphor-react'

import { AboutCard } from '../AboutCard'
import { Reveal } from '../Reveal'
import { TitleSection } from '../TitleSection'
import profileImg from '../../assets/profile.png'

export function About() {
  const titleAboutArray = ['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']

  return (
    <Reveal>
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
                Me chamo Oliver, tenho 19 anos e sou um desenvolvedor Fullstack
                com 3+ anos de experiência profissional em desenvolvimento de
                sistemas e integrações robustas. Atualmente na Sponte, trabalho
                no desenvolvimento e manutenção de sistemas ERP, implementando
                melhorias em integrações com múltiplos gateways de pagamento e
                desenvolvendo soluções que processam transações de forma
                confiável e escalável.
              </p>
            </div>

            <div className="text-card">
              <p>
                Ao longo dos últimos três anos, tive a oportunidade de trabalhar
                com <strong>VB.NET</strong>, <strong>C#</strong>,{' '}
                <strong>ASP.NET</strong>, <strong>React</strong>,{' '}
                <strong>SQL Server</strong>, <strong>Azure DevOps</strong> e{' '}
                <strong>Jenkins</strong>. Atualmente, venho expandindo minha
                expertise em <strong>Next.js</strong>, <strong>Node.js</strong>{' '}
                e <strong>TypeScript</strong> por meio de projetos pessoais.
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
    </Reveal>
  )
}
