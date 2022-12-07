import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={cn(cls.PageError, {}, [className])}>
      <h1>{t('Произошла непредвиденная ошибка')}</h1>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
