import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;

  @media (max-width: 768px) {
    display: none;
  }
`

const CursorDot = styled.div<{ x: number; y: number; isHovering: boolean }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme['light-blue']};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  box-shadow: 0 0 10px ${(props) => props.theme['light-blue']};

  ${(props) =>
    props.isHovering &&
    `
    transform: translate(-50%, -50%) scale(1.5);
    box-shadow: 0 0 20px ${props.theme['light-blue']};
  `}
`

const CursorOutline = styled.div<{ x: number; y: number; isHovering: boolean }>`
  position: absolute;
  width: 32px;
  height: 32px;
  border: 2px solid ${(props) => props.theme['light-blue']};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  opacity: 0.5;

  ${(props) =>
    props.isHovering &&
    `
    width: 48px;
    height: 48px;
    opacity: 0.8;
    border-color: ${props.theme['text-base']};
  `}
`

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', updateMousePosition)

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]',
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <CursorContainer>
      <CursorDot
        x={mousePosition.x}
        y={mousePosition.y}
        isHovering={isHovering}
      />
      <CursorOutline
        x={mousePosition.x}
        y={mousePosition.y}
        isHovering={isHovering}
      />
    </CursorContainer>
  )
}
