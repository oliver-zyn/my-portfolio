import { HomeContainer } from './syles'
import { Header } from '../../components/Header'
import { Intro } from '../../components/Intro'
import { SocialLinks } from '../../components/SocialLinks'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <SocialLinks />
    </HomeContainer>
  )
}
