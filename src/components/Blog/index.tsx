import { BlogContainer, BlogCard, BlogGrid } from './styles'
import { TitleSection } from '../TitleSection'
import { motion } from 'framer-motion'
import { Reveal } from '../Reveal'
import { useEffect, useState } from 'react'

type BlogPost = {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  link: string
}

export function Blog() {
  const titleBlogArray = ['B', 'l', 'o', 'g']
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch(import.meta.env.VITE_DEV_TO_URL!)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((post: any) => ({
          title: post.title,
          excerpt: post.description,
          date: new Date(post.published_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
          readTime: `${post.reading_time_minutes} min`,
          tags: post.tag_list,
          link: post.url,
        }))
        setPosts(formatted)
      })
      .catch((err) => {
        console.error('Erro ao carregar posts do Dev.to:', err)
      })
  }, [])

  return (
    <Reveal>
      <BlogContainer id="blog">
        <TitleSection subtitle="Insights" titleLetterArray={titleBlogArray} />

        <BlogGrid>
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard
                as="a"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card"
              >
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

                  <div className="read-more">Ler mais →</div>
                </div>
              </BlogCard>
            </motion.div>
          ))}
        </BlogGrid>
      </BlogContainer>
    </Reveal>
  )
}
