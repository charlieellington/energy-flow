import { useEffect, useState } from 'react'

export default function AutoRefresh() {
  const [initialBuildId, setInitialBuildId] = useState<string | null>(null)

  useEffect(() => {
    // Get the current build ID from Next.js runtime
    const getCurrentBuildId = () => {
      if (typeof window !== 'undefined' && (window as any).__NEXT_DATA__) {
        return (window as any).__NEXT_DATA__.buildId
      }
      return null
    }

    // Set initial build ID on first load
    const currentBuildId = getCurrentBuildId()
    if (currentBuildId && !initialBuildId) {
      setInitialBuildId(currentBuildId)
    }

    // Only start polling if we have an initial build ID
    if (!currentBuildId) return

    const checkForUpdates = async () => {
      try {
        // Check if current page still exists (catches deleted pages)
        const pageCheck = await fetch(window.location.pathname, {
          method: 'HEAD',
          cache: 'no-cache'
        })

        // If page is deleted (404), reload to go to home or show 404
        if (pageCheck.status === 404) {
          console.log('🔄 Current page was deleted, redirecting...')
          window.location.href = '/'
          return
        }

        // Fetch a simple API route to check for deployment changes
        // We'll use the favicon as a lightweight check - new deployments often update static assets
        const assetCheck = await fetch('/favicon.svg?' + Date.now(), {
          method: 'HEAD',
          cache: 'no-cache'
        })

        // Store the ETag/Last-Modified to detect changes
        const currentEtag = assetCheck.headers.get('etag') || assetCheck.headers.get('last-modified')
        const storedEtag = sessionStorage.getItem('site-etag')

        if (storedEtag && currentEtag && storedEtag !== currentEtag) {
          console.log('🔄 New deployment detected, reloading...')
          sessionStorage.setItem('site-etag', currentEtag)
          window.location.reload()
        } else if (currentEtag && !storedEtag) {
          // Store initial ETag
          sessionStorage.setItem('site-etag', currentEtag)
        }

      } catch (error) {
        // Silently handle network errors
        console.debug('AutoRefresh check failed:', error)
      }
    }

    // Check every 45 seconds for updates (reasonable interval)
    const interval = setInterval(checkForUpdates, 45000)

    // Also check when the user returns to the tab (after being away)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkForUpdates()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup
    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [initialBuildId])

  // This component renders nothing - it just runs the refresh logic
  return null
} 