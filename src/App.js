import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator
        one="1"
        two="2"
        three="3"
        four="4"
        five="5"
        six="6"
        seven="7"
        eight="8"
        nine="9"
        ac="AC"
        plusminus="+/-"
        modulo="%"
        point="."
        output={0}
        plus="+"
        zero="0"
        equal="="
        multi="x"
        divide="÷"
        minus="-"
      />
    </div>

  );
}

export default App;
