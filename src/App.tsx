import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Lessons from './Components/Lessons/Lessons';
import About from './Components/About';
import Contact from './Components/Contact'
import Compositions from './Components/Compositions';
import Performances from './Components/Performances';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
         <Navbar />
         <Intro />
         <About /> 
         <Lessons />
         <Compositions />
         <Performances />
         <Contact />
      </div>
    </div>
  );
}

export default App;
