import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './LinearLoader.module.scss'

interface LinearLoaderProps {
  className?: string
}

export const LinearLoader: FC<LinearLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={cn(cls.LinearLoader, {}, [className])}>
      <div className={cls.indeterminate}></div>
    </div>
  )
}
