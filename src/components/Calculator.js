import { PropTypes } from 'prop-types';
import { useState } from 'react';
import uuid from 'react-uuid';
import calculate from '../logic/calculate';

const Button = ({
  className, value, onClick, id,
}) => (
  <button type="button" className={className} onClick={onClick} id={id}>
    {value}
  </button>
);

const buttons = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const [state, setState] = useState({
  total: null,
  next: null,
  operation: null,
});

const calc = (btn) => {
  setState(calculate(state, btn));
};

const NoScreen = ({ output }) => (
  <div className="number-screen">
    {output}
  </div>
);

function Calculator(prop) {
  const { output } = prop;
  return (
    <div className="calculator">
      <NoScreen output={0} />
      <div className="input">
        {buttons.flat().map((btn, i) => (
          <Button
            key={uuid()}
            id={`id-${i}`}
            className={btn === 0 ? 'zero' : 'number-input'}
            value={btn}
            onClick={calc(btn)}
          />
        ))}
      </div>

    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.func,
  ]),
  id: PropTypes.string.isRequired,
};

NoScreen.propTypes = {
  output: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Calculator;
