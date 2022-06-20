import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Navbar from './components/Navbar';
import Checker from './components/Institute';
import {Departmentupper,Departmentlower} from './components/department';

function App() {
  return (
    // components on homepage
    // <div>
    //    <Director/>
    //    <Count/>
    //   <Checker/> 
    // </div>



// components on department website
    <div>
  <Navbar/>  
  <Departmentupper/>
    </div>
  // <div>
  
  //  <Departmentlower/>
    
  // </div>




  );
}

export default App;
