import './App.css';
// import Director from './components/director';
// import Count from './components/Placement';
// import Checker from './components/Institute';
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
  

    // testing routes
    <AppRouter/>

  );
}

export default App;
