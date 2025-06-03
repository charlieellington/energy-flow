import Script from 'next/script'
import { useEffect } from 'react'

const BuyMeACoffee = () => {
  useEffect(() => {
    // Initialize the button after the script loads
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).bmcWidgetLoader) {
        (window as any).bmcWidgetLoader.bmcWidget.load()
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="charlieflow"
        data-color="#FF5F5F"
        data-emoji=""
        data-font="Cookie"
        data-text="Buy me a coffee"
        data-outline-color="#000000"
        data-font-color="#ffffff"
        data-coffee-color="#FFDD00"
        strategy="lazyOnload"
      />
    </>
  )
}

export default BuyMeACoffee 