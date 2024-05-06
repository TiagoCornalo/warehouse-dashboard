import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent
    const mobile = Boolean(userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))
    setIsMobile(mobile)
  }

  useEffect(() => {
    checkIsMobile()
  }, [])

  console.log(isMobile)
  return { isMobile }
}

export default useIsMobile