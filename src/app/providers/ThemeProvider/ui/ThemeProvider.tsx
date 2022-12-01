import { FC, PropsWithChildren, useMemo, useState } from 'react'
import {
  AppTheme,
  LOCAL_STORAGE_APP_THEME_KEY,
  ThemeContext
} from '../lib/themeContext'

const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_APP_THEME_KEY)

const initialTheme = localStorageTheme as AppTheme || AppTheme.LIGHT

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(initialTheme)

  const themeState = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  )
}
