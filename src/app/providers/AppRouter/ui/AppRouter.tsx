import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { appRouterConfig } from 'shared/config/appRouterConfig/appRouterConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
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
