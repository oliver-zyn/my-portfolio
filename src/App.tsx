import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'
import { HelmetProvider } from 'react-helmet-async'
import { SEOHead } from './components/SEOHead'
import { ScrollProgress } from './components/ScrollProgress'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <SEOHead />
        <ScrollProgress />
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
