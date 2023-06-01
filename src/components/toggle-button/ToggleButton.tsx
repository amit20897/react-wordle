type Props = {
  options: string[]
  selected?: string
  disabled?: boolean
  onChanged?: (_: string) => void
}

export const ToggleButton = ({
  options,
  selected,
  disabled,
  onChanged,
}: Props) => {
  const onClick = (group?: string) => {
    if (disabled) return
    if (!group || group === selected) return

    if (onChanged) onChanged(group)
  }
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <a
        href="#"
        onClick={() => onClick(options[0])}
        className={`rounded-r-md border border-gray-200 bg-white ${
          selected === options[0] ? 'bg-gray-200 text-blue-700' : ''
        } px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white`}
      >
        {options[0]}
      </a>
      <a
        href="#"
        onClick={() => onClick(options[1])}
        className={`border-t border-b border-gray-200 bg-white ${
          selected === options[1] ? 'bg-gray-200 text-blue-700' : ''
        } px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white`}
      >
        {options[1]}
      </a>
      <a
        href="#"
        onClick={() => onClick(options[2])}
        aria-current="page"
        className={`rounded-l-lg border border-gray-200 bg-white ${
          selected === options[2] ? 'bg-gray-200 text-blue-700' : ''
        } px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white`}
      >
        {options[2]}
      </a>
    </div>
  )
}
