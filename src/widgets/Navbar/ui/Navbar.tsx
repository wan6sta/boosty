import {FC} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import {AppLink, AppLinkMods} from "shared/ui/AppLink/AppLink"
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props
  const {t} = useTranslation()

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink mode={AppLinkMods.LIGHT} to='/'>{t('Главная')}</AppLink>
        <AppLink mode={AppLinkMods.LIGHT} to='/about'>{t('О сайте')}</AppLink>
      </div>
    </div>
  )
}