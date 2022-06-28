import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
const AppRouter=()=>{
    return (
        <Router>
        <Navbar/>

        <Routes>
        <Route path='/TeamC' element={<Homepage/>} exact={false}/>
        <Route path='/placements' element={<AllPlacement/>}/>
        <Route path= '*' element={<Error/>}/>
    
        </Routes>
        <Footer/>


    
      </Router>
 )};


export default AppRouter;
  