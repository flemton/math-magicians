import './App.css';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NotFound from './components/NotFound';

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator output="0" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
