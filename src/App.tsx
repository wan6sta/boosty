import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './components/AboutPage/AboutPage.async'
import { MainPageAsync } from './components/MainPage/MainPage.async'
import { useTheme } from './helpers/theme/useTheme'
import './styles/index.scss'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>

			<button onClick={toggleTheme}>Toggle theme</button>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
					<Route path='*' element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}
