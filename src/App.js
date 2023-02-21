import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator output="0" />} />
        <Route path="calculator" element={<Calculator output="0" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
