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

export const HomeLayout = () => {
  return (
    <div className="flex flex-col bg-background h-dvh max-w-[1400px] w-[95dvw] mx-auto gap-8">
      <header className="flex justify-between w-full px-2 py-4">
        <Link
          to="/"
          className="flex items-center justify-center p-0 hover:bg-accent rounded-full py-2 px-4 transition"
          replace
        >
          <span className="text-lg font-extrabold whitespace-nowrap">Wiz Botsito</span>
        </Link>
        <nav>
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

          <ul className="gap-4 hidden lg:flex">
            {NavigationOptions.map((option, index) => (
              <li key={index}>
                <Button asChild variant="ghost">
                  <Link to={option.href}>{option.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
