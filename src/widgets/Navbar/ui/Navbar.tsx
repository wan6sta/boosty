import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from 'shared/lib/classNames/cn'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/'>{t('Главная')}</AppLink>
        <AppLink to='/about'>{t('О сайте')}</AppLink>
      </div>
    </div>
  )
}
