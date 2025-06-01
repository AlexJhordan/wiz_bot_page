import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RenderSettings } from "./pages/RenderSettings"
import { Login } from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderSettings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
