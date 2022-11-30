import {FC, useState} from 'react'
import {cn} from 'shared/lib/classNames/cn'
import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SideBarProps {
  className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
  const {className} = props
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={cn(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={toggleCollapsed}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  )
}