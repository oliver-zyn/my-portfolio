import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { ContainerLayout } from './styles'

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <Sidebar />
      <Outlet />
    </ContainerLayout>
  )
}