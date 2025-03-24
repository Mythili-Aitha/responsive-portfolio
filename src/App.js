import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
<div className="p-10 bg-white dark:bg-black text-black dark:text-white">
  <h1 className="text-4xl font-bold">Dark Mode Test</h1>
  <p>This background should turn black in dark mode.</p>
</div>

  );
}

export default App;
