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

import { useEffect, useRef } from "react"
import { animate } from "animejs"

export const RenderSettings = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    animate(rootRef.current!, {
      opacity: 1,
      duration: 350,
      y: [{ from: "3rem", to: "0", ease: "outExpo", duration: 300 }],
    })
  }, [])

  return (
    <div ref={rootRef} className="opacity-1 ">
      {/* {loading && <LoadingScreen />} */}
      <main className="w-full">
        <form>
          <Accordion
            type="multiple"
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
    </div>
  )
}
