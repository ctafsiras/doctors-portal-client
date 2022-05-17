import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppoinmentPage from './components/AppointmentPage/AppoinmentPage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RequireAdmin from './components/Authentication/RequireAdmin';
import RequireAuth from './components/Authentication/RequireAuth';
import AddDoctor from './components/Dashboard/AddDoctor';
import AllUsers from './components/Dashboard/AllUsers';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointemnts from './components/Dashboard/MyAppointemnts';
import MyReviews from './components/Dashboard/MyReviews';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='appointment' element={<RequireAuth><AppoinmentPage /></RequireAuth>} />
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointemnts />} />
          <Route path='reviews' element={<MyReviews />} />
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path='addDoctor' element={<AddDoctor><AllUsers /></AddDoctor>} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
