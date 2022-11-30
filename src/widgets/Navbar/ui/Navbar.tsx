import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkMods} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props

  return <div className={cn(cls.Navbar, {}, [className])}>
    <ThemeSwitcher/>

    <div className={cls.links}>
      <AppLink mode={AppLinkMods.LIGHT} to='/'>Main</AppLink>
      <AppLink mode={AppLinkMods.LIGHT} to='/about'>About</AppLink>
    </div>
  </div>
}