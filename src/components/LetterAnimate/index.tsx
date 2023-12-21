import { LetterAnimateContainer } from './styles'
import { useState } from 'react'

interface LetterProps {
  children: string
}

export function LetterAnimate({ children }: LetterProps) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => {
    setHovered(!hovered)
  }
  return (
    <LetterAnimateContainer
      $hovered={hovered}
      onMouseEnter={toggleHover}
      onAnimationEnd={toggleHover}
    >
      {children}
    </LetterAnimateContainer>
  )
}
