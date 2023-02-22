import { Router } from 'react-router-dom';

const Home = () => (
  <div>
    Home Page
    <button onClick={() => Router('calculator')} type="button">Click</button>
  </div>
);

export default Home;
