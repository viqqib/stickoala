import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className='flex items-center flex-col w-screen  md:px-40 px-10'>
     <Navbar />
      <Home />
    </div>
  );
}

export default App;
