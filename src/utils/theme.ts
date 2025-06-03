import { create } from "zustand"

type ThemeType = "light" | "dark"

type State = {
  theme: ThemeType | null
  toggleTheme: (theme?: ThemeType) => void
  initializeTheme: () => void
}

export const useThemeStore = create<State>((set) => ({
  theme: null,
  toggleTheme: () => {
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" }))
    document.documentElement.classList.toggle("dark")
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    )
  },
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme)
      set({ theme: savedTheme })
      return
    }

    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    document.documentElement.classList.add(userPrefersDark ? "dark" : "light")
  },
}))
