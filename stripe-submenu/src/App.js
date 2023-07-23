import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Submenu from './Components/Submenu';
import { useGlobalContext } from './context';

function App() {
  const {page, showSubmenu} = useGlobalContext();
  return (
      <>
        <Navbar />
        {showSubmenu && <Submenu page={page} />}
        <Hero />
      </>
  );
}

export default App;
