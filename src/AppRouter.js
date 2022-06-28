import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
const AppRouter=()=>{
    return (
        <Router>
        <Navbar/>

        <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/placements' element={<AllPlacement/>}/>
        <Route path= '/MessageofHOD' element={<HodMessage/>}/>
        <Route path= '*' element={<Error/>}/>
    
        </Routes>
        <Footer/>


    
      </Router>
 )};


export default AppRouter;
  
