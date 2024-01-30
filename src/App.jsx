import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import CompleteProfile from "./features/authentication/CompleteProfile"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AppLayout from "./ui/AppLayout"
import Owner from "./pages/Owner"
import OwnerDashboard from "./pages/OwnerDashboard"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"
import { DarkModeProvider } from "./context/DarkModeContext"

const queryClient = new QueryClient()

function App() {

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster/>
        <div className="">
          <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/complete-profile" element={<CompleteProfile/>}/>
            <Route path="/owner" element={<AppLayout/>}>
              <Route index element={<Navigate to="dashboard" replace/>}/>
              <Route path="/owner" element={<Owner/>}/>
              <Route path="dashboard" element={<OwnerDashboard/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:id" element={<SingleProject/>} />
            </Route>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
