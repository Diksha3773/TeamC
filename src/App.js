import './App.css';
// import Director from './components/director';
// import Count from './components/Placement';
// import Checker from './components/Institute';
// import {Department}from './components/department';
// import Footer from './components/Footer';
// import TopPlacement from './components/TopPlacement';
// import AllPlacement from './components/AllPlacement';
// import Imagesroll from './components/Imagesroll';
// import { useState } from 'react';
// import Place from './components/Place';
import AppRouter from './AppRouter';
function App() {
  // const [activate, setActivate] = useState(true);
  // const Handleactivate = ()=>{
  //   setActivate(!activate);
  // }
  
  return (
    // components on homepage of main website
    // <div>
    //    <Director/>
    //    <Count/>
    //   <Checker/> 
    // </div>

     // components on department website
    // <div>
    //   <Navbar />
    //   {activate && <Imagesroll/>}
    //   {!activate && <AllPlacement Handleactivate = {Handleactivate}/>}
    //   {activate && <Department />}
    //   {activate && <TopPlacement Handleactivate = {Handleactivate}/>}
    //   <Footer />
      
    //   </div>
  // components on department website
    // <div>
    //   <Navbar />
    //   {activate && <Imagesroll/>}
    //   {!activate && <AllPlacement Handleactivate = {Handleactivate}/>}
    //   {activate && <Department />}
    //   {activate && <TopPlacement Handleactivate = {Handleactivate}/>}
    //   <Place/>
    //   <Footer />
    // </div>
    // testing routes
    <>
    <AppRouter/>
    </>
  );
}

export default App;
