import { NavigationOptions } from "@/const/navigation"
import { Button } from "./components/ui/button"

import { Accordion } from "@/components/ui/accordion"
import {
  CursorSettings,
  GameplaySettings,
  ObjectSettings,
  OtherSettings,
  SkinSettings,
  VideoSettings,
} from "./OptionsSection"

function App() {
  return (
    <div className="bg-background h-dvh">
      <header className="w-fit px-4 py-2 ml-auto">
        <nav>
          <ul className="flex gap-4">
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

      <main className="w-full max-w-[1400px] mx-auto border px-4 rounded-2xl shadow-lg">
        <form>
          <Accordion type="single" collapsible>
            <GameplaySettings />
            <SkinSettings />
            <CursorSettings />
            <ObjectSettings />
            <VideoSettings />
            <OtherSettings />
          </Accordion>
        </form>
      </main>
    </div>
  )
}

export default App
