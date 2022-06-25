import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Navbar from './components/Navbar';
import Checker from './components/Institute';
import {Department}from './components/department';
import Footer from './components/Footer';
import TopPlacement from './components/TopPlacement';


function App() {
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
      <Department />
      <TopPlacement />
      <Footer />
    </div>

  );
}

export default App;
