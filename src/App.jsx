import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import CompleteProfile from "./features/authentication/CompleteProfile"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import OwnerDashboard from "./pages/OwnerDashboard"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"
import { DarkModeProvider } from "./context/DarkModeContext"
import OwnerLayout from "./features/owner/OwnerLayout"
import FreelancerLayout from "./features/freelancer/FreelancerLayout"
import FreelancerDashboard from "./pages/FreelancerDashboard"
import Proposals from "./pages/Proposals"
import SubmittedProjects from "./pages/SubmittedProjects"
import ProtectRoute from "./ui/ProtectRoute"
import NotAccess from "./pages/NotAccess"
import AdminLayout from "./features/admin/AdminLayout"
import Categories from "./pages/Categories"
import Users from "./pages/Users"
import AdminDashboard from "./pages/AdminDashboard"

const queryClient = new QueryClient()

function App() {

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster/>
          <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/complete-profile" element={<CompleteProfile/>}/>
            <Route path="/owner" 
              element={
              <ProtectRoute>
                <OwnerLayout/>
              </ProtectRoute>}
            >
              <Route index element={<Navigate to="dashboard" replace/>}/>
              <Route path="dashboard" element={<OwnerDashboard/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:id" element={<SingleProject/>} />
            </Route>

            <Route path="/freelancer" 
              element={
                <ProtectRoute>
                  <FreelancerLayout/>
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace/>}/>
              <Route path="dashboard" element={<FreelancerDashboard/>}/>
              <Route path="proposals" element={<Proposals/>}/>
              <Route path="projects" element={<SubmittedProjects/>}/>
            </Route>
            <Route path="/admin" 
              element={
                <ProtectRoute>
                  <AdminLayout/>
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace/>}/>
              <Route path="dashboard" element={<AdminDashboard/>}/>
              <Route path="proposals" element={<Proposals/>}/> 
              <Route path="projects" element={<SubmittedProjects/>}/>
              <Route path="categories" element={<Categories/>}/>
              <Route path="users" element={<Users/>}/>
            </Route>

            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/not-access" element={<NotAccess/>}/>
          </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
