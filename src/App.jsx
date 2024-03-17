import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Recipes></Recipes>
    </>
  );
}

export default App;
