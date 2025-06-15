import {
  BodyProjects,
  FilterButton,
  ProjectsContainer,
  ProjectsHeader,
} from './styles'

import { Fade } from 'react-awesome-reveal'
import { ProjectCard } from '../ProjectCard'
import { TitleSection } from '../TitleSection'
import { useState } from 'react'
import { projects } from '../../utils/projetcsData'
import { motion } from 'framer-motion'

export function Projects() {
  const titleProjectsArray = [
    'M',
    'e',
    'u',
    's',
    ' ',
    'P',
    'r',
    'o',
    'j',
    'e',
    't',
    'o',
    's',
  ]

  const [selectedFilter, setselectedFilter] = useState('all')

  const projectsFilter = projects.filter((project) =>
    project.tags.includes(selectedFilter),
  )

  const getProjectCount = (filter: string) => {
    if (filter === 'all') return projects.length
    return projects.filter((project) => project.tags.includes(filter)).length
  }

  const displayedProjects = selectedFilter === 'all' ? projects : projectsFilter

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <ProjectsContainer id="projects">
        <TitleSection
          subtitle="Criações"
          titleLetterArray={titleProjectsArray}
        />

        <ProjectsHeader>
          <p className="projects-subtitle">
            Uma coleção dos meus projetos favoritos, desde landing pages até
            sistemas complexos. Cada um conta uma história diferente.
          </p>

          <div className="projects-stats">
            <div className="stat-item">
              <div className="stat-number">{projects.length}+</div>
              <div className="stat-label">Projetos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tecnologias</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Anos</div>
            </div>
          </div>
        </ProjectsHeader>

        <BodyProjects>
          <motion.div
            className="project-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FilterButton
              onClick={() => setselectedFilter('all')}
              $active={selectedFilter === 'all'}
            >
              Todos ({projects.length})
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('react')}
              $active={selectedFilter === 'react'}
            >
              React ({getProjectCount('react')})
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('next')}
              $active={selectedFilter === 'next'}
            >
              Next.js ({getProjectCount('next')})
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('tailwind')}
              $active={selectedFilter === 'tailwind'}
            >
              Tailwind ({getProjectCount('tailwind')})
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('node')}
              $active={selectedFilter === 'node'}
            >
              Node.js ({getProjectCount('node')})
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('html/css/js')}
              $active={selectedFilter === 'html/css/js'}
            >
              Html/Css/Js ({getProjectCount('html/css/js')})
            </FilterButton>
          </motion.div>

          <div className="project-list">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={`${selectedFilter}-${project.title}`}
                imgUrl={project.imgUrl}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
                title={project.title}
                tags={project.tags}
                description={project.description}
              />
            ))}
          </div>
        </BodyProjects>
      </ProjectsContainer>
    </Fade>
  )
}
