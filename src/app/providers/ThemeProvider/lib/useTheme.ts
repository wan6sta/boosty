import { useContext } from 'react'
import { AppTheme, LOCAL_STORAGE_APP_THEME_KEY, ThemeContext } from './themeContext'

interface UseThemeReturn {
  theme: AppTheme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_APP_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
