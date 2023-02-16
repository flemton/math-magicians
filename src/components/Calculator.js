import { PropTypes } from 'prop-types';
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

const calc = (btn) => {
  const obj = {};
  calculate(obj, btn);
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
  ]).isRequired,
  id: PropTypes.string.isRequired,
};

export default Calculator;
