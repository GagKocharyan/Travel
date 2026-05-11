import { useEffect, useState } from "react"

export const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    })

    
    return screenWidth
}