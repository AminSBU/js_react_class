import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState('');  
  const [firstOperand, setFirstOperand] = useState(null); 

  const handleButtonClick = (digit) => {  
    if (value.length < 9) {  
      setValue(value + digit);  
    }  
  };

  const handleOperatorClick = (op) => {  
    if (value) {  
      setOperator(op);  
      setFirstOperand(value);  
      setValue(''); // Clear display for the next number  
    }  
  };  

  const calculateResult = () => {  
    if (firstOperand !== null && operator && value) {  
      const a = parseFloat(firstOperand);  
      const b = parseFloat(value);  
      let result;  

      switch (operator) {  
        case '+':  
          result = a + b;  
          break;  
        case '-':  
          result = a - b;  
          break;  
        case 'X':  
          result = a * b;  
          break;  
        case '/':  
          result = b !== 0 ? a / b : 'Error'; // Handle division by zero  
          break;  
        default:  
          return;  
      }  

      setValue(result.toString());  
      setOperator('');  
      setFirstOperand(null);  
    }  
  };  

  const clear = () => {  
    setValue('');  
    setOperator('');  
    setFirstOperand(null);  
  };

  return (
    <div className="container">
      <div className="calculator">
      <form action="">  
          <div className="CalculatorText">  
            <input type="text" value={value} readOnly />  
          </div>  

          <div>  
            <input type="button" value="C" onClick={clear}/>  
            <input type="button" value="+-" />  
            <input type="button" value="%" />  
            <input type="button" value="/" />  
          </div>  

          <div>  
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />  
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />  
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />  
            <input type="button" value="X" onClick={() => handleOperatorClick('X')} />  
          </div>  

          <div>  
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />  
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />  
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />  
            <input type="button" value="-" />  
          </div>  

          <div>  
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />  
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />  
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />  
            <input type="button" value="+" />  
          </div>  

          <div>  
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />  
            <input type="button" value="." />  
            <input type="button" value="=" className='equal' onClick={calculateResult} />  
          </div>  
        </form>  
      </div>
    </div>
  );
}

export default App;
