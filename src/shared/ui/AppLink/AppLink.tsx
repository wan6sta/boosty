import { FC, PropsWithChildren } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export const enum AppLinkMods {
  LIGHT = 'light'
}

interface AppLinkProps extends LinkProps {
  className?: string
  mode?: AppLinkMods
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const {
    className,
    children,
    mode,
    ...otherProps
  } = props

  return (
    <Link
      className={cn(cls.AppLink, {}, [className, cls[mode]])} {...otherProps}
    >
      {children}
    </Link>
  )
}
