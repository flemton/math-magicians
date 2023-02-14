import { ReactPropTypes } from 'react';

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

Button.propTypes = {
  className: ReactPropTypes.string.isRequired,
  value: ReactPropTypes.string.isRequired,
  onClick: ReactPropTypes.func.isRequired,
  id: ReactPropTypes.string.isRequired,
};

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
            key={i}
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

export default Calculator;
