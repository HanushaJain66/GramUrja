import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import StudentButton from './StuButton/studentButton';
import Track from './Attendence/Attendence';
import Register from './register/register';
import Login from './login/Login';
import Contact from './Contact/contact';
import About from './About/About';
import Attendence from './Attendence/Attendence';
import Intro from './Intro/Intro';
import Update from './Update/Update';
import Viewdetails from './View/Viewdetails';
import UpdateBase from './Update/updateBase';
import ViewBase from './View/Viewbase';
import Goat from './Goat/goat';
import GoatCareGuidelines from './goatDo/GoatDoAndDont';
import CreateStudent from './createStudent/createStudent';
import GraphicalReport from './GraphicalReport/GraphicalReport'
import GraphBase from './GraphicalReport/GraphBase';
import ClassBase from './ClassReport/ClassBase';
import ClassReport from './ClassReport/ClassReport';

const PrivateRoute = () => {
  return localStorage.getItem("userId") ?
    <Navigate replace to="/" /> :
    <>
      <Outlet />
    </>

}

const PublicRoutes = () => {
  return localStorage.getItem("userId") ?
    <>
      <Outlet />
    </> :
    <Navigate replace to="/" />
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route element={<PrivateRoute />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path='/student' element={<StudentButton />} />
            <Route path='/attendence' element={<Attendence />} />
            <Route path='/GraphBase' element={<GraphBase />} />
            <Route path='/stuhistory/:stuId' element={<GraphicalReport/>}/>
            <Route path='/ClassBase' element={<ClassBase />} />
            <Route path='/classhistory/:currClass' element={<ClassReport/>}/>
            <Route path='/stdbtn' element={<StudentButton />} />
            <Route path='/update' element={<UpdateBase />} />
            <Route path='/views/:stuId' element={<Viewdetails />} />
            <Route path='/views' element={<ViewBase />} />
            <Route path='/update/:stuId' element={<Update />} />
            <Route path='/goat' element={<Goat />} />
            <Route path='/goatdo&dont' element={<GoatCareGuidelines />} />
            <Route path='/createstudent' element={<CreateStudent />} />

          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path='/' element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;