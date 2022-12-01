import { FC } from 'react'
import { cn } from 'shared/lib/classNames/cn'
import { Button, ButtonMods } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={cn('', {}, [className])}
      mods={ButtonMods.LIGHT}
      onClick={changeLanguage}
    >
      {t('язык')}
    </Button>
  )
}
