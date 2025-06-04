import { Button } from "@/components/ui/button"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import React, { useEffect, useMemo, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ThemeButton = React.memo(() => {
  const [theme, setTheme] = useState("")

  const Themes = useMemo(
    () => ["dark", "light", "pink", "blue", "red", "green", "galaxy"] as const,
    []
  )

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove(...Themes)
      document.documentElement.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
    console.log(theme)
  }, [theme, Themes])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? <IconSunFilled /> : <IconMoonFilled />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-3xl text-center">
        <DropdownMenuLabel>Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)} className="justify-center">
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
