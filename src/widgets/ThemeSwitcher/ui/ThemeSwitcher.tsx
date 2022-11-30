import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import {AppTheme, useTheme} from "app/providers/ThemeProvider"
import {Button, ButtonMods} from "shared/ui/Button/Button"
import lightIcon from 'shared/assets/icons/light.png'
import darkIcon from 'shared/assets/icons/dark.png'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const {className} = props

  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={cn(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      mods={ButtonMods.CLEAR}
    >
      {
        theme === AppTheme.LIGHT
          ? <img src={darkIcon} alt={'darkIcon'}/>
          : <img src={lightIcon} alt={'lightIcon'}/>
      }
    </Button>
  )
}