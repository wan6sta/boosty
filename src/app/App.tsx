import { Suspense } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>

        <div className='content-page'>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}
