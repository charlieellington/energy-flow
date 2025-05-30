import { useEffect, useState } from 'react'

export default function SidebarToggle() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    // Apply or remove helper class on body for desktop viewports
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('ef-hide-sidebar', !open)
    }
  }, [open])

  return (
    <button
      aria-label="Toggle sidebar"
      onClick={() => setOpen((v) => !v)}
      className="hidden lg:inline-flex items-center justify-center rounded-md px-2 py-1 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {open ? '⇤' : '☰'}
    </button>
  )
} 