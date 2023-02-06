import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Messages from '../pages/Messages';
import Documents from '../pages/Documents';
import Organizations from '../pages/Organizations';
import Settings from '../pages/Settings';



const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/messages' element={<Messages />} />
    <Route path='/documents' element={<Documents />} />
    <Route path='/organizations' element={<Organizations />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='*' element={<Navigate to='/home' />} />
  </Routes>
}

export default Routers
