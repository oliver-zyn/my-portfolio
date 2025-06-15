import {
  BodyProjectCard,
  ImageProjectCard,
  ProjectCardContainer,
  TagsProject,
} from './styles'
import { Code, Globe } from 'phosphor-react'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      layout
    >
      <ProjectCardContainer tabIndex={0}>
        <ImageProjectCard>
          <img loading="lazy" src={imgUrl} alt={`imagem do projeto ${title}`} />

          <div className="overlay">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe size={20} /> Demo
              </a>
            )}
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
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
    </motion.div>
  )
}
