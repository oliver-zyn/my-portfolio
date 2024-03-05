import { BodyProjects, FilterButton, ProjectsContainer } from './styles'

import { Fade } from 'react-awesome-reveal'
import { ProjectCard } from '../ProjectCard'
import { TitleSection } from '../TitleSection'
import { useState } from 'react'
import { projects } from '../../utils/projetcsData'

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

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <ProjectsContainer id="projects">
        <TitleSection
          subtitle="Criações"
          titleLetterArray={titleProjectsArray}
        />
        <BodyProjects>
          <div className="project-filter">
            <FilterButton
              onClick={() => setselectedFilter('all')}
              $active={selectedFilter === 'all'}
            >
              Todos
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('react')}
              $active={selectedFilter === 'react'}
            >
              React
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('next')}
              $active={selectedFilter === 'next'}
            >
              Next.js
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('tailwind')}
              $active={selectedFilter === 'tailwind'}
            >
              Tailwind
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('node')}
              $active={selectedFilter === 'node'}
            >
              Node.js
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('html/css/js')}
              $active={selectedFilter === 'html/css/js'}
            >
              Html/Css/Js
            </FilterButton>
          </div>
          <div className="project-list">
            {selectedFilter === 'all'
              ? projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    imgUrl={project.imgUrl}
                    codeUrl={project.codeUrl}
                    demoUrl={project.demoUrl}
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                  />
                ))
              : projectsFilter.map((project, index) => (
                  <ProjectCard
                    key={index}
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
