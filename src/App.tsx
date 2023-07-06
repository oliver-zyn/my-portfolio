import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
