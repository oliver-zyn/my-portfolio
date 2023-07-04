import { useState } from 'react'
import { LetterContainer } from './styles'

interface LetterProps {
  children: string
}

export function Letter({ children }: LetterProps) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => {
    setHovered(!hovered)
  }
  return (
    <LetterContainer
      className={hovered ? 'bouncing' : ''}
      onMouseEnter={toggleHover}
      onAnimationEnd={toggleHover}
    >
      {children}
    </LetterContainer>
  )
}
