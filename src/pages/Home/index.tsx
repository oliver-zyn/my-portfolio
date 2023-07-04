import { Letter } from '../../components/Letter'
import { ButtonHome, HomeContainer } from './styles'

export function Home() {
  const arrayOliverzyn = ['O', 'l', 'i', 'v', 'e', 'r', 'z', 'y', 'n', '.']
  const arrayFrontEndDeveloper = [
    'F',
    'r',
    'o',
    'n',
    't',
    'E',
    'n',
    'd ',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  return (
    <HomeContainer>
      <div>
        <span>Olá, eu sou o</span>
        <h1>
          {arrayOliverzyn.map((letter, index) => {
            return <Letter key={index}>{letter}</Letter>
          })}
        </h1>
        <span>
          {arrayFrontEndDeveloper.map((letter, index) => {
            return <Letter key={index}>{letter}</Letter>
          })}
        </span>
      </div>
      <ButtonHome>Meus Projetos</ButtonHome>
    </HomeContainer>
  )
}
