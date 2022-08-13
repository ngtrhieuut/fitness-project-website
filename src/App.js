import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programms from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testtimonials from './components/Testtimonials/Testtimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Plans />
      <Testtimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
