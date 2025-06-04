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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IconEdit, IconPlus, IconSettings } from "@tabler/icons-react"
import { LoadingScreen } from "@/components/LoadingScreen"

export const RenderSettings = () => {
  return <LoadingScreen />

  return (
    <>
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
            type="single"
            className="w-full border p-4 space-y-4 [&>*]:border-b-0 rounded-4xl shadow-lg bg-card/50 transition-colors"
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
    </>
  )
}
