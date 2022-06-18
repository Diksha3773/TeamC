import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Checker from './components/Institute';
import Department from './components/department';



function App() {
  return (
    <div>
       <Director/>
      <Count/>
      <Checker/> 
      
    </div>
//     <div>
//  <Department/>
//     </div>
  );
}

export default App;
