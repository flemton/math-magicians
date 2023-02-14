function Calculator(prop) {
  const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ac,
    plusminus,
    modulo,
    point,
    output,
    plus,
    zero,
    equal,
    minus,
    divide,
    multi,
  } = prop;
  return (
    <div className="calculator">
      <div className="number-screen">
        {output}
      </div>
      <div className="input">
        <div className="number-input">
          <li>{ac}</li>
          <li>{plusminus}</li>
          <li>{modulo}</li>
          <li>{one}</li>
          <li>{two}</li>
          <li>{three}</li>
          <li>{four}</li>
          <li>{five}</li>
          <li>{six}</li>
          <li>{seven}</li>
          <li>{eight}</li>
          <li>{nine}</li>
          <li id="zero">{zero}</li>

          <li>{point}</li>
        </div>
        <div className="operation">
          <li>{divide}</li>
          <li>{multi}</li>
          <li>{minus}</li>
          <li>{plus}</li>
          <li>{equal}</li>
        </div>
      </div>

    </div>
  );
}

export default Calculator;
