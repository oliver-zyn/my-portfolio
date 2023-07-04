import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h1>opa</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
