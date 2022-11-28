import { createContext } from 'react'

export const enum AppTheme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeContextState {
	theme?: AppTheme
	setTheme?: (theme: AppTheme) => void
}

export const ThemeContext = createContext<ThemeContextState>({})

export const LOCAL_STORAGE_APP_THEME_KEY = 'APP_THEME_KEY'
