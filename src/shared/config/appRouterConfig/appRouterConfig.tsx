import { PathRouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

interface AppRouteProps extends PathRouteProps {
  path: AppRoutePaths
}

const enum AppRoutePaths {
  'main' = '/',
  'about' = '/about'
}

export const appRouterConfig: AppRouteProps[] = [
  { path: AppRoutePaths.main, element: <MainPage/> },
  { path: AppRoutePaths.about, element: <AboutPage/> }
]
