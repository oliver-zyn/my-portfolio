import { Code, Globe } from 'phosphor-react'
import {
  BodyProjectCard,
  ImageProjectCard,
  ProjectCardContainer,
  TagsProject,
} from './styles'
import { Fade } from 'react-awesome-reveal'

interface ProjectCardProps {
  imgUrl: string
  demoUrl?: string
  codeUrl: string
  title: string
  tags: string[]
  description: string
}

export function ProjectCard({
  imgUrl,
  demoUrl,
  codeUrl,
  title,
  tags,
  description,
}: ProjectCardProps) {
  return (
    <Fade duration={1000} triggerOnce>
      <ProjectCardContainer tabIndex={0}>
        <ImageProjectCard>
          <img src={imgUrl} alt={`imagem do projeto ${title}`} />

          <div>
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <Globe size={20} /> Demo
            </a>
            <a href={codeUrl} target="_blank" rel="noreferrer">
              <Code size={20} /> Code
            </a>
          </div>
        </ImageProjectCard>

        <BodyProjectCard>
          <h2>{title}</h2>

          <TagsProject>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </TagsProject>

          <p>{description}</p>
        </BodyProjectCard>
      </ProjectCardContainer>
    </Fade>
  )
}
