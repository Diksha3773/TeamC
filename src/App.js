import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Checker from './components/Institute';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Director/>
      <Count/>
      <Checker/>
    </div>
  );
}

export default App;
