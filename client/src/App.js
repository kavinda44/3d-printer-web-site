
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/HomePage/Home';
import ParticalesBackground from './Components/Hero/ParticalesBackground';
import About from './Components/Pages/AboutPage/About';

function App() {
  return (
    <div >
   
     <NavBar/>
      <Hero/>
      <Home/>
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
