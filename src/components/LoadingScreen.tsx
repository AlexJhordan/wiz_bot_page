import { animate } from "animejs"
import { useEffect } from "react"
// import reactLogo from "../../public/icons8-osuuu.svg"

export function LoadingScreen() {
  // const root = useRef(null)
  // const scope = useRef<Scope | null>(null)
  // const [rotations, setRotations] = useState(0)

  useEffect(() => {
    animate("span", {
      // Property keyframes
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      // Property specific parameters
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: (_, i) => i * 50, // Function based value
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    })

    // Properly cleanup all anime.js instances declared inside the scope
    // return () => scope.current?.revert()
  }, [])

  // const handleClick = () => {
  //   setRotations((prev) => {
  //     const newRotations = prev + 1
  //     // Animate logo rotation on click using the method declared inside the scope
  //     scope.current?.methods.rotateLogo(newRotations)
  //     return newRotations
  //   })
  // }

  return (
    <h2 className="flex items-center justify-center gap-1 text-9xl w-dvw h-dvh fixed top-0 left-0 bg-background z-90 text-center">
      {/* <h2 className="grid place-content-center grid-cols-11 text-9xl w-dvw h-dvh fixed top-0 left-0 bg-background z-90 text-center"> */}
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
