import './App.css';
// import Director from './components/director';
// import Count from './components/Placement';
import Navbar from './components/Navbar';
// import Checker from './components/Institute';
import {Department}from './components/department';
import Footer from './components/Footer';
import TopPlacement from './components/TopPlacement';
import AllPlacement from './components/AllPlacement';
import Imagesroll from './components/Imagesroll';
import { useState } from 'react';


function App() {
  const [activate, setActivate] = useState(true);
  const Handleactivate = ()=>{
    setActivate(!activate);
  }
  
  return (
    // components on homepage of main website
    // <div>
    //    <Director/>
    //    <Count/>
    //   <Checker/> 
    // </div>



    // components on department website
    <div>
      <Navbar />
      {activate && <Imagesroll/>}
      {!activate && <AllPlacement Handleactivate = {Handleactivate}/>}
      {activate && <Department />}
      {activate && <TopPlacement Handleactivate = {Handleactivate}/>}
      <Footer />
    </div>

  );
}

export default App;
