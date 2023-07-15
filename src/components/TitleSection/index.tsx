import { LetterAnimate } from '../LetterAnimate'
import { TitleSectionContainer } from './styled'

interface TitleSectionProps {
  subtitle: string
  titleLetterArray: string[]
}

export function TitleSection({
  subtitle,
  titleLetterArray,
}: TitleSectionProps) {
  return (
    <TitleSectionContainer>
      <span>{subtitle}</span>
      <h1>
        {titleLetterArray.map((letter, index) => {
          return letter === ' ' ? (
            <span key={index}>{'\u00A0'}</span>
          ) : (
            <LetterAnimate key={index}>{letter}</LetterAnimate>
          )
        })}
      </h1>
    </TitleSectionContainer>
  )
}
