import { PropTypes } from 'prop-types';
import uuid from 'react-uuid';

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

function Calculator(prop) {
  const { output } = prop;
  return (
    <div className="calculator">
      <div className="number-screen">
        {output}
      </div>
      <div className="input">
        {buttons.flat().map((btn, i) => (
          <Button
            key={uuid()}
            id={`id-${i}`}
            className={btn === 0 ? 'zero' : 'number-input'}
            value={btn}
            onClick
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
