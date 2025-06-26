import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Survey from './components/Survey';
import Final from './components/Final';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/thankyou" element={<Final />} />
      </Routes>

    </div>
  );
}

export default App;


