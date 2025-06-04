import { animate, createTimer } from "animejs"
import { useEffect, useRef } from "react"
// import reactLogo from "../../public/icons8-osuuu.svg"

export function LoadingScreen() {
  const screen = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    animate(screen.current!.querySelectorAll("span"), {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 500 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      // rotate: {
      //   from: "-1turn",
      //   delay: 0,
      // },
      delay: (_, i) => i * 50,
      ease: "inOutCirc",
      loopDelay: 200,
      loop: true,
    })

    createTimer({
      duration: 300000,
      onComplete: () => {
        animate(screen.current!.querySelectorAll("span"), {
          opacity: 0,
          duration: 1000,
        })
        animate(screen.current!, {
          opacity: 0,
          duration: 2000,
        })
      },
    })
  }, [])

  return (
    <h2
      ref={screen}
      className="transition-colors flex flex-wrap items-center justify-center gap-1 text-4xl md:text-6xl xl:text-9xl w-dvw h-dvh fixed top-0 left-0 bg-background z-90 text-center"
    >
      <span>W</span>
      <span>I</span>
      <span>Z</span>
      <span>&nbsp;</span>
      <span>B</span>
      <span>O</span>
      <span>T</span>
      <span>S</span>
      <span>I</span>
      <span>T</span>
      <span>O</span>
    </h2>
  )
}
