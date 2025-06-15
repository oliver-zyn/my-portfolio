import { BlogContainer, BlogCard, BlogGrid } from './styles'
import { TitleSection } from '../TitleSection'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    title: 'De Zero a Desenvolvedor Profissional aos 18 Anos: Minha Jornada',
    excerpt:
      'Como transformei curiosidade em carreira e o que aprendi desenvolvendo profissionalmente desde os 17 anos na Linx Sponte.',
    date: '20 Jun 2024',
    readTime: '8 min',
    tags: ['Carreira', 'Story', 'Motivation'],
  },
  {
    title: '5 Técnicas Simples para Turbinar a Performance em React',
    excerpt:
      'Dicas práticas de otimização que aprendi desenvolvendo em produção. React.memo, useMemo, lazy loading e mais!',
    date: '15 Jun 2024',
    readTime: '6 min',
    tags: ['React', 'Performance', 'Frontend'],
  },
  {
    title: 'Como Conseguir Seus Primeiros Clientes como Freelancer Frontend',
    excerpt:
      'Guia prático com tudo que aprendi fazendo freelances: precificação, onde encontrar clientes, contratos e mais.',
    date: '10 Jun 2024',
    readTime: '10 min',
    tags: ['Freelancer', 'Business', 'Career'],
  },
]

export function Blog() {
  const titleBlogArray = ['B', 'l', 'o', 'g']

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <BlogContainer id="blog">
        <TitleSection subtitle="Insights" titleLetterArray={titleBlogArray} />

        <BlogGrid>
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard>
                <div className="blog-header">
                  <div className="blog-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">
                      {post.readTime} de leitura
                    </span>
                  </div>
                </div>

                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-tags">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href="https://dev.to/oliverzyn" // Substitua pelos links reais após publicar
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Ler mais →
                  </a>
                </div>
              </BlogCard>
            </motion.div>
          ))}
        </BlogGrid>
      </BlogContainer>
    </Fade>
  )
}
