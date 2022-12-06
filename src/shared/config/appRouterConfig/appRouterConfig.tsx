import { Navigate, PathRouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

interface AppRouteProps extends PathRouteProps {
  path: AppRoutePaths
}

export const enum AppRoutePaths {
  'main' = '/',
  'about' = '/about',
  'page_not_found' = '/404',
  'page_not_found_redirect' = '*'
}

export const appRouterConfig: AppRouteProps[] = [
  { path: AppRoutePaths.main, element: <MainPage/> },
  { path: AppRoutePaths.about, element: <AboutPage/> },
  { path: AppRoutePaths.page_not_found, element: <NotFoundPage/> },
  { path: AppRoutePaths.page_not_found_redirect, element: <Navigate to={AppRoutePaths.page_not_found}/> }
]
