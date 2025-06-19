import {
  BodyProjects,
  FilterButton,
  FilterToggleButton,
  FilterList,
  ProjectsContainer,
  ProjectsHeader,
} from './styles'

import { Fade } from 'react-awesome-reveal'
import { ProjectCard } from '../ProjectCard'
import { TitleSection } from '../TitleSection'
import { useState } from 'react'
import { projects } from '../../utils/projetcsData'
import { motion } from 'framer-motion'
import { FunnelSimple, CaretDown } from 'phosphor-react'

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
  const [isFilterExpanded, setIsFilterExpanded] = useState(false)

  const projectsFilter = projects.filter((project) =>
    project.tags.includes(selectedFilter),
  )

  const getProjectCount = (filter: string) => {
    if (filter === 'all') return projects.length
    return projects.filter((project) => project.tags.includes(filter)).length
  }

  const displayedProjects = selectedFilter === 'all' ? projects : projectsFilter

  const getCurrentFilterName = () => {
    switch (selectedFilter) {
      case 'all':
        return 'Todos os projetos'
      case 'react':
        return 'Projetos React'
      case 'next':
        return 'Projetos Next.js'
      case 'tailwind':
        return 'Projetos Tailwind'
      case 'node':
        return 'Projetos Node.js'
      case 'html/css/js':
        return 'Projetos Html/Css/Js'
      default:
        return 'Todos os projetos'
    }
  }

  const handleFilterChange = (filter: string) => {
    setselectedFilter(filter)
    setIsFilterExpanded(false)
  }

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
              <div className="stat-number">3+</div>
              <div className="stat-label">Anos</div>
            </div>
          </div>
        </ProjectsHeader>

        <BodyProjects>
          <motion.div
            className="project-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            layout
          >
            <FilterToggleButton
              $isExpanded={isFilterExpanded}
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            >
              <div className="toggle-content">
                <div className="filter-icon">
                  <FunnelSimple size={16} />
                </div>
                <div className="filter-text">
                  <span className="main-text">{getCurrentFilterName()}</span>
                  <span className="count-text">
                    {displayedProjects.length} projeto(s) realizado(s)
                  </span>
                </div>
              </div>
              <CaretDown className="chevron" size={20} />
            </FilterToggleButton>

            <FilterList $isExpanded={isFilterExpanded}>
              <div className="filter-buttons">
                <FilterButton
                  onClick={() => handleFilterChange('all')}
                  $active={selectedFilter === 'all'}
                >
                  Todos ({projects.length})
                </FilterButton>
                <FilterButton
                  onClick={() => handleFilterChange('react')}
                  $active={selectedFilter === 'react'}
                >
                  React ({getProjectCount('react')})
                </FilterButton>
                <FilterButton
                  onClick={() => handleFilterChange('next')}
                  $active={selectedFilter === 'next'}
                >
                  Next.js ({getProjectCount('next')})
                </FilterButton>
                <FilterButton
                  onClick={() => handleFilterChange('tailwind')}
                  $active={selectedFilter === 'tailwind'}
                >
                  Tailwind ({getProjectCount('tailwind')})
                </FilterButton>
                <FilterButton
                  onClick={() => handleFilterChange('node')}
                  $active={selectedFilter === 'node'}
                >
                  Node.js ({getProjectCount('node')})
                </FilterButton>
                <FilterButton
                  onClick={() => handleFilterChange('html/css/js')}
                  $active={selectedFilter === 'html/css/js'}
                >
                  Html/Css/Js ({getProjectCount('html/css/js')})
                </FilterButton>
              </div>
            </FilterList>
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
