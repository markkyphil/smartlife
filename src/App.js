import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Wallet from './pages/Wallet'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
    </Router>
  );
}

export default App;
