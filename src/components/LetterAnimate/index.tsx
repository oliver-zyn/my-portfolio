import { useState } from 'react'
import { LetterAnimateContainer } from './styles'

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
      isHovered={hovered}
      onMouseEnter={toggleHover}
      onAnimationEnd={toggleHover}
    >
      {children}
    </LetterAnimateContainer>
  )
}
