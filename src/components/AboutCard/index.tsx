import { IconProps } from 'phosphor-react'
import { AboutCardContainer } from './styles'

interface AboutCardProps {
  icon: IconProps
  title: string
  description: string
}

export function AboutCard({ icon, title, description }: AboutCardProps) {
  return (
    <AboutCardContainer>
      <div className="icon">
        <>{icon}</>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </AboutCardContainer>
  )
}
