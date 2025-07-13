import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/dashboard"
import SessionRecords from "./components/sessionrecords"
import Appointments from "./components/appointments"
import Settings from "./components/settings"  
import Headofficedashboard from "./components/headofficedashboard" 
import AdminDashboardPage from "./components/admindashboard"
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/session-records" element={<SessionRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/headofficedashboard" element={<Headofficedashboard />} /> 
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        
      </Routes>
    </Router>
  )
}

export default App
