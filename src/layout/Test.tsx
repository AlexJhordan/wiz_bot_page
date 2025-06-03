import { Button } from "@/components/ui/button"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"

export const Test = React.memo(() => {
  const [theme, setTheme] = useState("")

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
    console.log(theme)
  }, [theme])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
  }
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? <IconSunFilled /> : <IconMoonFilled />}
    </Button>
  )
})
