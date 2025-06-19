import { BlogContainer, BlogCard, BlogGrid } from './styles'
import { TitleSection } from '../TitleSection'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { blogPosts } from '../../utils/blogData'

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
                    href="https://dev.to/oliverzyn"
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
