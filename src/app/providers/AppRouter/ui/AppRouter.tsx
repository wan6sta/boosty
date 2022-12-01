import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { appRouterConfig } from 'shared/config/appRouterConfig/appRouterConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          appRouterConfig.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={<div className='page-wrapper'>{route.element}</div>}
            />)
        }
      </Routes>
    </Suspense>
  )
}
