import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RenderSettings } from "./pages/RenderSettings"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { HomeLayout } from "./layout/HomeLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { RenderList } from "./pages/RenderList"
import { ClientList } from "./pages/ClientList"
import { Skins } from "./pages/Skins"
import { Discord } from "./pages/Discord"
import { Donate } from "./pages/Donate"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<HomeLayout />}>
          <Route path="/render-settings" element={<RenderSettings />} />
          <Route path="/render-list" element={<RenderList />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
