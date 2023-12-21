import { BodyProjects, FilterButton, ProjectsContainer } from './styles'

import { Fade } from 'react-awesome-reveal'
import { ProjectCard } from '../ProjectCard'
import { TitleSection } from '../TitleSection'
import { useState } from 'react'

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

  const projects = [
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/246906033-27ff58d4-3b1c-4f09-837c-3e62d983e819.png',
      demoUrl: 'https://coffe-delivery-oliverzyn.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/coffe-delivery',
      title: 'Coffe Delivery',
      tags: ['react', 'typescript'],
      description:
        'O Coffee Delivery é uma plataforma que disponibiliza uma variedade de cafés, permitindo que o usuário os adicione ao seu carrinho de compras e efetue o pedido.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/242758355-8898e96a-5fc5-462c-a3aa-6756518d44f1.png',
      demoUrl: 'https://auxiliary-codes.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/auxiliary-codes',
      title: 'Auxiliary Codes',
      tags: ['react', 'typescript'],
      description:
        'Projeto criado com o objetivo de armazenar códigos na linguagem C utilizados durantes as aulas na faculdade de Análise e Desenvolvimento de Sistemas - UTFPR.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/259283609-68e92be8-4051-47a8-a300-3b062b83c3e3.png',
      demoUrl: 'https://skal-lading.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/skal',
      title: 'Skål lading page',
      tags: ['react', 'typescript'],
      description:
        'Uma lading page criada para divulgar a o projeto Skal, que visa desenvolver um sistema para venda e controle de ingressos tokenizados.',
    },
    {
      imgUrl:
        'https://github.com/oliver-zyn/ignite-shop/assets/89222905/4c597ad6-d2e9-4450-b4b8-348abff05949',
      demoUrl: 'https://todo-list-oliverzyn.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/todo-list',
      title: 'Ignite Shop',
      tags: ['next', 'typescript'],
      description:
        'Projeto criado para resolver um desafio do curso Ignite da rocketseat. O projeto é uma lista de tarefas simples.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/244778220-43bd85f6-a4ed-4612-9d5f-6460b1ea0325.png',
      demoUrl: 'https://ignite-timer-oliverzyn.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/ignite-timer',
      title: 'Ignite Timer',
      tags: ['react', 'typescript'],
      description:
        'O Ignite Timer é uma página de pomodoro, uma técnica que consiste na utilização de um cronômetro para dividir o trabalho em períodos de alguns minutos.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/251605876-8c95def4-7902-4650-bd3f-e785590268ee.png',
      demoUrl: 'https://notion-react-oliverzyn.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/notion-react',
      title: 'Notion React',
      tags: ['react', 'typescript', 'tailwind'],
      description:
        'Projeto criado para simular a interface e alguns funcionamentos básicos da ferramenta Notion.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/167318566-26e4c1cc-8253-4880-939a-ae288f243c56.png',
      demoUrl: 'https://feedget-nlw.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/nlw-feedget',
      title: 'FeedGet',
      tags: ['react', 'typescript', 'tailwind', 'node'],
      description:
        'O FeedGet é um widget que envia feedbacks para os donos da página. O projeto foi desenvolvido durante uma semana de NLW da rocketseat.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/242760511-e37fe4af-5717-4753-a97d-76eff9cfdea5.png',
      demoUrl: 'https://time-reaction.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/reaction-time',
      title: 'Reaction Time',
      tags: ['react', 'typescript'],
      description:
        'A aplicação consiste em um teste de reflexo, onde o seu objetivo é clicar o mais rápido que conseguir quando o circulo branco mudar de cor.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/259567603-b7e93547-42db-4082-9678-e717cf2881eb.png',
      demoUrl: 'https://feednac.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/feednac_2.0',
      title: 'Feednac',
      tags: ['react', 'typescript'],
      description:
        'O Feednac consiste no frontend de uma página para postar feedbacks sobre a instituição do Senac, criado como projeto integrador.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/259569112-fee67b8b-25f1-4d78-8ff5-22125bc02789.png',
      demoUrl: 'https://oliver-zyn.github.io/projeto-cantina/',
      codeUrl: 'https://github.com/oliver-zyn/projeto-cantina',
      title: 'Cantina Senac',
      tags: ['html/css/js'],
      description:
        'A Cantina Senac é o frontend criado para uma página de vendas dos produtos disponíveis para venda na cantina do senac, criado como projeto integrador.',
    },
    {
      imgUrl:
        'https://user-images.githubusercontent.com/89222905/174495123-bfcc3601-8c88-4995-b5b0-caa17c7f3e8d.png',
      demoUrl: 'https://todo-list-oliverzyn.netlify.app',
      codeUrl: 'https://github.com/oliver-zyn/todo-list',
      title: 'Todo List',
      tags: ['react', 'typescript'],
      description:
        'Projeto criado para resolver um desafio do curso Ignite da rocketseat. O projeto é uma lista de tarefas simples.',
    },
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
