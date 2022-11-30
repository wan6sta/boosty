import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './Button.module.scss'

export const enum ButtonMods {

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  mods?: ButtonMods
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {className, children, mods, ...otherProps} = props

  return (
    <button
      className={cn(cls.Button, {}, [className, cls[mods]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}