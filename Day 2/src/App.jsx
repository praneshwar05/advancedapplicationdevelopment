import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Homepage from './pages/Homepage';
import Login from './pages/Login'
import Register from './pages/Register'
import  {BrowserRouter as Router, Route, BrowserRouter, Routes} from "react-router-dom";
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import AdmissionForm from './pages/AdmissionForm';
import Adminstudent from './pages/Adminstudent';
import Adminheader from './pages/Adminheader';
import Adminhome from './pages/Adminhome';
import CourseTable from './pages/CourseTable';
import Sidebar from './pages/Sidebar';
import AdminTable from './pages/AdminTable';
function App() {

  return (
    <BrowserRouter><Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/homepage" element={<Homepage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/admissionform" element={<AdmissionForm/>}/>
    <Route path="/adminstudent" element={<Adminstudent/>}/>
    <Route path="/adminheader" element={<Adminheader/>}/>
    <Route path="/course" element={<CourseTable/>}/>
    <Route path="/adminhome" element={<Adminhome/>}/>
    <Route path="/sidebar" element={<Sidebar/>}/>
    <Route path="/enroll" element={<AdminTable/>}/>
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
