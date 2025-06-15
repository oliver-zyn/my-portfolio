import {
  ButtonHome,
  ButtonGroup,
  HomeContainer,
  ImageHome,
  TitleHome,
  TypewriterName,
} from './styles'
import { motion } from 'framer-motion'
import { RocketLaunch } from 'phosphor-react'

export function Intro() {
  return (
    <HomeContainer>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <TitleHome>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Olá, eu sou
          </motion.span>

          <TypewriterName>Oliverzyn</TypewriterName>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            Um desenvolvedor frontend focado em transformar ideias em realidade
            com código e design moderno.
          </motion.span>
        </TitleHome>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="button-group"
        >
          <ButtonGroup>
            <ButtonHome href="#projects">
              <RocketLaunch size={18} />
              Ver Projetos
            </ButtonHome>
          </ButtonGroup>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ImageHome>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 256 256"
            whileHover={{
              scale: 1.05,
              rotate: 5,
              filter: 'drop-shadow(0 0 50px #42d3ff)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.path
              d="M211.89,119.09a4,4,0,0,0-2.49-2.84l-60.81-22.8,15.33-76.67a4,4,0,0,0-6.84-3.51l-112,120a4,4,0,0,0-1,3.64,4,4,0,0,0,2.49,2.84l60.81,22.8L92.08,239.22a4,4,0,0,0,6.84,3.51l112-120A4,4,0,0,0,211.89,119.09ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,153.32,29l-13.24,66.2a4,4,0,0,0,2.52,4.53L201,121.64Z"
              fill="url(#gradiente)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <defs>
              <linearGradient id="gradiente" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#42d3ff"></stop>
                <stop
                  offset="100%"
                  stopColor="#42d3ff"
                  stopOpacity="0.8"
                ></stop>
              </linearGradient>
            </defs>
          </motion.svg>
        </ImageHome>
      </motion.div>
    </HomeContainer>
  )
}
