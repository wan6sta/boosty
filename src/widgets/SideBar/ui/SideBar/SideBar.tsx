import { FC, useState } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={cn(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={toggleCollapsed}>1</button>

      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  )
}
