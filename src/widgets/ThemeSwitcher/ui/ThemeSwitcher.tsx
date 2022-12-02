import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import { AppTheme, useTheme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useTheme()

  const isDark = theme === AppTheme.DARK

  return (
    <div onClick={toggleTheme} className={cn(cls.ThemeSwitcher, { [cls.ThemeSwitcherDark]: isDark })}>
      <div className={cn(cls.circle, { [cls.circleDark]: isDark }, [className])}>
      </div>
    </div>
  )
}
