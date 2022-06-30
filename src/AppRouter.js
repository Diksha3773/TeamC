import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/placements' element={<AllPlacement />} />
        <Route path='/MessageofHOD' element={<HodMessage />} />
        <Route path='/Syllabus' element={<Syllabus />} />
        <Route path='*' element={<Error />} />
        <Route path='/MissionandVision' element={<VisionandMission />} />
        <Route path='/Infrastructure' element={<Infrastructure />} />

      </Routes>
      <Footer />



    </Router>
  )
};


export default AppRouter;
