import { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)
  
  return (
    <button
      className="text-gray-300 hover:text-white transition-colors duration-200"
      aria-label="Toggle theme"
      onClick={() => setDark(d => !d)}
    >
      {dark ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  )
}
