import "@/App.css"
import { Auth } from '@/pages/Auth'
import Landing from '@/pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Verify from "./pages/Verify"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/verify/:token" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  )
}
