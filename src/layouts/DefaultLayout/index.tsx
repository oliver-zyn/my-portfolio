import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './syles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />

      <main>
        <Outlet />
      </main>
    </DefaultLayoutContainer>
  )
}
