import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'
import { HelmetProvider } from 'react-helmet-async'
import { CustomCursor } from './components/CustomCursor'
import { SEOHead } from './components/SEOHead'
import { ScrollProgress } from './components/ScrollProgress'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <SEOHead />
        <ScrollProgress />
        <CustomCursor />
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
