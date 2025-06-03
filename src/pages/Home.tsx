import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-dvh gap-4 p-4 text-center">
      <h1 className="text-5xl font-bold text-pretty">Wiz Botsito</h1>
      {/* <p>Render your replays with ease</p> */}
      <nav className="flex gap-4">
        <Button asChild>
          <Link to="/render-settings">Render Replay</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/about">
            Learn More
            <IconArrowRight />
          </Link>
        </Button>
      </nav>
    </main>
  )
}
