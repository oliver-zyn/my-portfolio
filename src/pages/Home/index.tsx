import { HomeContainer } from './syles'
import { Header } from '../../components/Header'
import { Intro } from '../../components/Intro'
import { SocialLinks } from '../../components/SocialLinks'
import { About } from '../../components/About'
import { Projects } from '../../components/Projects'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <SocialLinks />
      <About />
      <Projects />
    </HomeContainer>
  )
}
