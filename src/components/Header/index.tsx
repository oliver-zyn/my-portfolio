import { HeaderContainer, Logo } from './styles'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <HeaderContainer>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo>{'{ oliver }'}</Logo>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a
          href="#about"
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Sobre
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Projetos
        </motion.a>
        <motion.a
          href="#blog"
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Blog
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Contato
        </motion.a>
      </motion.nav>
    </HeaderContainer>
  )
}
