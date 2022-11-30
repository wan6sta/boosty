import {cn} from 'shared/lib/classNames/cn'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/AppRouter'
import {Navbar} from 'widgets/Navbar'
import './styles/index.scss'

export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}