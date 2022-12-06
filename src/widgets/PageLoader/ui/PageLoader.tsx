import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './PageLoader.module.scss'
import { LinearLoader } from 'shared/ui/LinearLoader/LinearLoader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={cn(cls.PageLoader, {}, [className])}>
      <LinearLoader/>
    </div>
  )
}
