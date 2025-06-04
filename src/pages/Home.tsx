import { LoadingScreen } from "@/components/LoadingScreen"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import { animate } from "animejs"

export const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const anim = (to: string) => {
    animate(mainRef.current!, {
      opacity: 0,
      duration: 300,
    })
    setTimeout(() => {
      navigate(to)
    }, 300)
  }

  useEffect(() => {
    animate(mainRef.current!.querySelectorAll("span"), {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 500 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      delay: (_, i) => i * 50,
      ease: "inOutCirc",
      loopDelay: 200,
      loop: true,
    })
  }, [])
  return (
    <main
      ref={mainRef}
      className="flex flex-col items-center justify-center h-dvh gap-4 p-4 text-center"
    >
      {/* <h1 className="text-5xl font-bold text-pretty">Wiz Botsito</h1> */}
      <LoadingScreen />
      {/* <p>Render your replays with ease</p> */}
      <nav className="flex gap-4">
        <Button
          asChild
          className="transform hover:scale-110 transition"
          onClick={() => anim("/render-settings")}
        >
          <a>Render Replay</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="transform hover:scale-110 transition"
          onClick={() => anim("/about")}
        >
          <a>
            Learn More
            <IconArrowRight />
          </a>
        </Button>
      </nav>
    </main>
  )
}
