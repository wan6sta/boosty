import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './NotFoundPage.module.scss'
import icon404 from 'shared/assets/icons/404.png'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={cn(cls.NotFoundPage, {}, [className])}>
      <div className={cls.wrapper}>
        <img src={icon404} alt="404"/>
        <h1>{t('Страница не найдена')}</h1>
      </div>
    </div>
  )
}

export default NotFoundPage
