import { FC } from 'react'
import classnames from 'classnames'

const themeClasses = {
  primary:
    'bg-violet-600 text-violet-100 border-violet-600 hover:bg-violet-500 hover:border-violet-500 dark:bg-violet-700 dark:border-violet-700 dark:hover:bg-violet-600 dark:hover:border-violet-600',
  secondary:
    'bg-transparent text-gray-600 border-gray-400 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-500 dark:hover:bg-gray-900',
}

export const Button: FC<{ label: string; action: () => void; theme?: 'primary' | 'secondary' }> = ({
  label,
  action,
  theme = 'primary',
}) => {
  const sharedClasses =
    'px-6 py-2 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-900'

  return (
    <button className={classnames(sharedClasses, themeClasses[theme])} onClick={action} aria-label={label}>
      {label}
    </button>
  )
}
