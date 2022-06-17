import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Navbar from './components/Navbar';
import Checker from './components/Institute';

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
