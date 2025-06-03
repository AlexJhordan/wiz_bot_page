import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export const Signup = () => {
  return (
    <main className="flex flex-col bg-card max-h-[700px] max-w-[450px] w-[95dvw] mx-auto gap-8 rounded-2xl border p-6 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <header>
        <h1 className="text-2xl font-bold text-center">Signup</h1>
      </header>
      <form className="grid gap-2">
        <Input placeholder="Username" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="">Submit</Button>
      </form>
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link className="underline hover:font-semibold" to="/login" replace>
          Login
        </Link>
      </p>
    </main>
  )
}
