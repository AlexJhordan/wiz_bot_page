import { NavigationOptions } from "@/const/navigation"
import { Button } from "@/components/ui/button"

import { Accordion } from "@/components/ui/accordion"
import {
  CursorSettings,
  GameplaySettings,
  ObjectSettings,
  OtherSettings,
  SkinSettings,
  VideoSettings,
} from "@/components/OptionsSection"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IconEdit, IconMenuDeep, IconPlus, IconSettings } from "@tabler/icons-react"
import { Link } from "react-router-dom"

export const RenderSettings = () => {
  return (
    <div className="flex flex-col bg-background h-dvh max-w-[1400px] w-[95dvw] mx-auto gap-8">
      <header className="flex justify-between w-full px-2 py-4">
        <Link
          to="/"
          className="flex items-center justify-center p-0 hover:bg-accent rounded-full py-2 px-4 transition"
        >
          {/* <IconCircleLetterWFilled size={50} /> */}
          <span className="text-lg font-extrabold whitespace-nowrap">Wiz Botsito</span>
        </Link>
        <nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden ml-auto w-fit">
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

          <ul className="gap-4 hidden md:flex">
            {NavigationOptions.map((option, index) => (
              <li key={index}>
                <Button asChild variant="ghost">
                  <a href={option.href}>{option.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="w-full">
        <Sheet>
          <SheetTrigger className="fixed bottom-4 left-4 w-fit" asChild>
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
        <form>
          <Accordion
            type="multiple"
            className="w-full border p-4 space-y-4 [&>*]:border-b-0 rounded-4xl shadow-lg bg-card"
          >
            <GameplaySettings />
            <SkinSettings />
            <CursorSettings />
            <ObjectSettings />
            <VideoSettings />
            <OtherSettings />
            <Button className="w-fit mx-4">Send render job</Button>
          </Accordion>
        </form>
      </main>
      <footer>
        <p className="text-xs text-muted-foreground font-semibold text-center">
          © 2025 Wiz. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
