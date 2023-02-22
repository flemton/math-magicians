import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Quotes from './components/Quotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator output="0" />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
