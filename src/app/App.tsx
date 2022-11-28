import { Link, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { cn } from 'shared/lib/classNames/cn'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import './styles/index.scss'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>

			<button onClick={toggleTheme}>Toggle theme</button>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='*' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}
