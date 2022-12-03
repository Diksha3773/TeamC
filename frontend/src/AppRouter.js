import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
import AcadCordinator from './pages/AcadCordinator';
import Menu from './components/Menu';
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';
import Programme from './pages/Programme';
import Faculty from './pages/Faculty';
import Staff from './pages/Staff';
import Students from './pages/Students';
import Alumni from './pages/Alumni';
import PhdScholar from './pages/PhdScholar';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
const AppRouter = () => {

  return (
    <>
        <Router>
          <div className='container md:mb-2'>
            <Navbar/>
            {/* <NewNavbar /> */}
          </div>

          <div className="max-w-[1400px] flex flex-col lg:flex-row w-full mt-24 sm:mt-36 lg:mt-[6.5rem] lg:min-h-screen overflow-y-auto overflow-x-hidden mx-auto">
            <div className=" w-full lg:w-[260px] absolute lg:relative bg-white z-10 py-2 px-0">
              <div className='w-full my-auto lg:shadow-lg lg:block lg:pt-8 max-h-screen'>
                <Menu/>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center lg:w-[calc(100%-260px)] sm:mt-8 md:mt-2 h-full">
              <Routes>
                <Route path='/Home' element={<Homepage />} />
                <Route path='/placements' element={<AllPlacement />} />
                <Route path='*' element={<Error />} />
                {/* About us */}
                <Route path='/MessageofHOD' element={<HodMessage />} />
                <Route path='/MissionandVision' element={<VisionandMission />} />
                <Route path='/Infrastructure' element={<Infrastructure />} />
                {/* Academic */}
                <Route path='/Syllabus' element={<Syllabus heading='Syallbus' syllabus={true} />} />
                <Route path='/Timetable' element={<Syllabus heading='Time Table' syllabus={false} />} />
                <Route path='/Acadcord' element={<AcadCordinator />} />
                <Route path='/Programme' element={<Programme />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/achievements' element={<Achievements />} />
                {/* Faculty */}
                <Route path='/Faculty' element={<Faculty/>} />
                <Route path='/Profile/:id' element={<Profile/>} />
                <Route path='/Staff' element={<Staff/>} />
                <Route path='/Students' element={<Students/>} />
                <Route path='/Alumni' element={<Alumni/>} />
                <Route path='/PhdScholar' element={<PhdScholar/>} />
              </Routes>
            <div className='mx-1 w-full'>
              <Footer />
            </div>
            </div>
          </div>
        </Router>
    </>
  )
};


export default AppRouter;
