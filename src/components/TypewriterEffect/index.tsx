import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`

const TypewriterContainer = styled.div`
  display: flex;
  align-items: center;
`

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: ${(props) => props.theme['light-blue']};
  margin-left: 2px;
  animation: ${blink} 1s infinite;
`

const Letter = styled.span<{ delay: number }>`
  opacity: 0;
  animation: fadeIn 0.1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay}ms;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
  showCursor?: boolean
}

export function TypewriterEffect({
  text,
  delay = 0,
  speed = 100,
  showCursor = true,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, startTyping])

  return (
    <TypewriterContainer>
      {displayedText.split('').map((char, index) => (
        <Letter key={index} delay={index * speed + delay}>
          {char}
        </Letter>
      ))}
      {showCursor && <Cursor />}
    </TypewriterContainer>
  )
}
