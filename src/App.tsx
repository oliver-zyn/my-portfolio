import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
