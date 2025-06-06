import { NavigationOptions } from "@/const/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconMenuDeep } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { ThemeButton } from "./ThemeButton"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IconEdit, IconPlus, IconSettings } from "@tabler/icons-react"

export const HomeLayout = () => {
  return (
    <div className="flex flex-col bg-background h-dvh max-w-[1400px] w-[95dvw] mx-auto gap-8 py-2 transition-colors">
      <header className="sticky top-0 bg-background/50 backdrop-blur-sm z-50 flex justify-between w-full px-2 py-4 transition-colors">
        <Link
          to="/"
          className="flex items-center justify-center p-0 hover:bg-accent rounded-full py-2 px-4 transition hover:scale-105"
          replace
        >
          <span className="text-lg font-extrabold whitespace-nowrap">Wiz Botsito</span>
        </Link>
        <nav className="flex items-center gap-2">
          <ul className="gap-2 hidden lg:flex">
            {NavigationOptions.map((option, index) => (
              <li key={index}>
                <Button asChild variant="ghost">
                  <Link to={option.href}>{option.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <ThemeButton />

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden ml-auto w-fit">
              <Button variant="ghost" size="icon">
                <IconMenuDeep />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-3xl mr-4 p-2" asChild>
              <ul>
                {NavigationOptions.map((option, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <li className="text-center justify-center">
                      <Link to={option.href}>{option.label}</Link>
                    </li>
                  </DropdownMenuItem>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <Sheet>
        <SheetTrigger className="fixed bottom-4 left-4 w-fit z-10" asChild>
          <Button size="icon">
            <IconEdit />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="py-4 pt-10 px-2 w-fit min-w-[200px]">
          <SheetHeader className="space-y-2">
            <SheetTitle className="flex items-center justify-between gap-2">
              Presets
              <span className="flex items-center gap-2">
                <IconPlus />
                <IconSettings />
              </span>
            </SheetTitle>
            <SheetDescription>You need to login to manage presets!</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Outlet />
      <footer className="flex justify-center w-full px-2 py-4 transition-colors">
        <p className="text-xs text-muted-foreground font-semibold text-center">
          © 2025 Wiz. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
