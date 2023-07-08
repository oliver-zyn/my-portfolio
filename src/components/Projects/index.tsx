import { Fade } from 'react-awesome-reveal'
import { LetterAnimate } from '../LetterAnimate'
import { ProjectCard } from '../ProjectCard'
import { BodyProjects, ProjectsContainer, TitleProjects } from './styles'

export function Projects() {
  const arrayProjects = [
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
      tags: ['react', 'typescript'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt culpa quisquam eos in minus mollitia cumque voluptas veritatis.',
    },
  ]

  return (
    <Fade duration={1000} delay={300}>
      <ProjectsContainer id="projects">
        <TitleProjects>
          <span>Projetos</span>
          <h1>
            {arrayProjects.map((letter, index) => {
              return letter === ' ' ? (
                <span key={index}>{'\u00A0'}</span>
              ) : (
                <LetterAnimate key={index}>{letter}</LetterAnimate>
              )
            })}
          </h1>
        </TitleProjects>
        <BodyProjects>
          {projects.map((project, index) => (
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
        </BodyProjects>
      </ProjectsContainer>
    </Fade>
  )
}
