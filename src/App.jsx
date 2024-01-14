import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import CompleteProfile from "./features/authentication/CompleteProfile"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="container sm:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/complete-profile" element={<CompleteProfile/>}/>
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
