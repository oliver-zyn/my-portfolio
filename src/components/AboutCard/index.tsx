import { AboutCardContainer } from './styles'
import { IconProps } from 'phosphor-react'

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
