import styled from 'styled-components'

interface LetterContainerProps {
  $hovered: boolean
}

export const LetterAnimateContainer = styled.span<LetterContainerProps>`
  display: block;
  cursor: default;
  animation: ${(props) =>
    props.$hovered ? 'rubberband-anim 800ms alternate ease-out' : 'none'};

  &:hover {
    color: ${(props) => props.theme['light-blue']};
  }

  @keyframes rubberband-anim {
    0% {
      transform: scaleX(1);
    }
    40% {
      transform: scaleX(1.12) scaleY(0.75);
    }
    55% {
      transform: scaleX(0.85) scaleY(1);
    }
    65% {
      transform: scaleX(1.09) scaleY(0.85);
    }
    75% {
      transform: scaleX(0.9) scaleY(1);
    }
    90% {
      transform: scaleX(1.05) scaleY(0.95);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }
`
