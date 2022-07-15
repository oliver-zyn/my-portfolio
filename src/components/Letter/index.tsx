import { useState } from "react";
import { ContainerLetter } from "./styles";

interface LetterProps {
  children: string
}

export function Letter({ children }: LetterProps) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered)
  }
  return (
    <ContainerLetter
      className={hovered ? "bouncing" : ""}
      onMouseEnter={toggleHover}
      onAnimationEnd={toggleHover}
    >
      {children}
    </ContainerLetter>
  );
}