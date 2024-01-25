import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import CompleteProfile from "./features/authentication/CompleteProfile"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AppLayout from "./ui/AppLayout"
import Owner from "./pages/Owner"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="">
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/complete-profile" element={<CompleteProfile/>}/>
          <Route path="/owner" element={<AppLayout/>}>
            <Route path="/owner" element={<Owner/>}/>
          </Route>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
