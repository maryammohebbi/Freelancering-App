import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"

function App() {

  return (
    <div className="container sm:max-w-screen-xl">
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App
