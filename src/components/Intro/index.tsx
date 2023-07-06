import { LetterAnimate } from '../LetterAnimate'
import { ButtonHome, HomeContainer, ImageHome, TitleHome } from './styles'

export function Intro() {
  const arrayOliverzyn = ['O', 'l', 'i', 'v', 'e', 'r', 'z', 'y', 'n']

  return (
    <HomeContainer>
      <div>
        <TitleHome>
          <span>Olá, eu sou</span>
          <h1>
            {arrayOliverzyn.map((letter, index) => {
              return <LetterAnimate key={index}>{letter}</LetterAnimate>
            })}
          </h1>
          <span>
            Um desenvolvedor frontend focado em transformar ideias em realidade
            com código e design.
          </span>
        </TitleHome>
        <ButtonHome>Meus Projetos</ButtonHome>
      </div>
      <div>
        <ImageHome>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 256 256"
          >
            <path
              d="M211.89,119.09a4,4,0,0,0-2.49-2.84l-60.81-22.8,15.33-76.67a4,4,0,0,0-6.84-3.51l-112,120a4,4,0,0,0-1,3.64,4,4,0,0,0,2.49,2.84l60.81,22.8L92.08,239.22a4,4,0,0,0,6.84,3.51l112-120A4,4,0,0,0,211.89,119.09ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,153.32,29l-13.24,66.2a4,4,0,0,0,2.52,4.53L201,121.64Z"
              fill="url(#gradiente)"
            ></path>
            <defs>
              <linearGradient id="gradiente" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#42d3ff"></stop>
                <stop
                  offset="100%"
                  stopColor="#42d3ff"
                  stopOpacity="0.8"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </ImageHome>
      </div>
    </HomeContainer>
  )
}
