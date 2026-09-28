import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'color-scheme'

function readPinned() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

/**
 * Two-state theme control: "follow system" or "pinned opposite of system".
 * Pinning persists even if the system preference later changes to match it.
 */
export function useTheme() {
  const [pinned, setPinned] = useState(readPinned)
  const [systemDark, setSystemDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setSystemDark(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const effective = pinned ?? (systemDark ? 'dark' : 'light')

  useEffect(() => {
    const root = document.documentElement
    if (pinned) root.setAttribute('data-theme', pinned)
    else root.removeAttribute('data-theme')

    const meta = document.querySelector('meta[name="color-scheme"]')
    if (meta) meta.setAttribute('content', pinned ?? 'light dark')
  }, [pinned])

  const toggle = useCallback(() => {
    setPinned((current) => {
      if (current) {
        try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
        return null
      }
      const opposite = systemDark ? 'light' : 'dark'
      try { localStorage.setItem(STORAGE_KEY, opposite) } catch { /* ignore */ }
      return opposite
    })
  }, [systemDark])

  return { effective, toggle }
}
