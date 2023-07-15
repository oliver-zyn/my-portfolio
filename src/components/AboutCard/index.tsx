import { IconProps } from 'phosphor-react'
import { AboutCardContainer } from './styles'

interface AboutCardProps {
  icon: IconProps
  title: string
}

export function AboutCard({ icon, title }: AboutCardProps) {
  return (
    <AboutCardContainer>
      <div className="icon">
        <>{icon}</>
      </div>
      <div className="text">
        <p>{title}</p>
      </div>
    </AboutCardContainer>
  )
}
