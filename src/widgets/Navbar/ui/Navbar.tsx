import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import {AppLink, AppLinkMods} from "shared/ui/AppLink/AppLink"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>

      <div className={cls.links}>
        <AppLink mode={AppLinkMods.LIGHT} to='/'>Главная</AppLink>
        <AppLink mode={AppLinkMods.LIGHT} to='/about'>О сайте</AppLink>
      </div>
    </div>
  )
}