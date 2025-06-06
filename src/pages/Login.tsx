import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <main className="flex flex-col bg-card max-h-[700px] max-w-[450px] w-[95dvw] mx-auto gap-8 rounded-2xl border p-6 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <header>
        <h1 className="text-2xl font-bold text-center">Login</h1>
      </header>
      <form className="grid gap-2">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Submit</Button>
      </form>
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link className="underline hover:font-semibold" to="/signup" replace>
          Sign up
        </Link>
      </p>
    </main>
  )
}
