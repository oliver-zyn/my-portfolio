import { Fade } from 'react-awesome-reveal'
import { LetterAnimate } from '../LetterAnimate'
import { ProjectCard } from '../ProjectCard'
import {
  BodyProjects,
  FilterButton,
  ProjectsContainer,
  TitleProjects,
} from './styles'
import { useState } from 'react'

export function Projects() {
  const titleProjectsArray = [
    'M',
    'i',
    'n',
    'h',
    'a',
    's',
    ' ',
    'c',
    'r',
    'i',
    'a',
    'ç',
    'õ',
    'e',
    's',
  ]

  const projects = [
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react', 'typescript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react', 'typescript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react', 'typescript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react', 'node'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
    {
      imgUrl: 'https://im-gabi.vercel.app/ignews.png',
      demoUrl: '',
      codeUrl: '',
      title: 'Meu Projeto',
      tags: ['react', 'typescript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
  ]

  const [selectedFilter, setselectedFilter] = useState('all')

  const projectsFilter = projects.filter((project) =>
    project.tags.includes(selectedFilter),
  )

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <ProjectsContainer id="projects">
        <TitleProjects>
          <span>Projetos</span>
          <h1>
            {titleProjectsArray.map((letter, index) => {
              return letter === ' ' ? (
                <span key={index}>{'\u00A0'}</span>
              ) : (
                <LetterAnimate key={index}>{letter}</LetterAnimate>
              )
            })}
          </h1>
        </TitleProjects>
        <BodyProjects>
          <div className="project-filter">
            <FilterButton
              onClick={() => setselectedFilter('all')}
              active={selectedFilter === 'all'}
            >
              Todos
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('react')}
              active={selectedFilter === 'react'}
            >
              React
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('tailwind')}
              active={selectedFilter === 'tailwind'}
            >
              Tailwind
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('node')}
              active={selectedFilter === 'node'}
            >
              Node.js
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('typescript')}
              active={selectedFilter === 'typescript'}
            >
              Typescript
            </FilterButton>
            <FilterButton
              onClick={() => setselectedFilter('next')}
              active={selectedFilter === 'next'}
            >
              Next.js
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
