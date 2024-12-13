import { useState } from 'react';  
import './App.css';  

function App() {  
  const [expression, setExpression] = useState(''); // Track the full expression  

  const handleButtonClick = (digit) => {  
    if (expression.length < 9) {  
      setExpression(expression + digit);  
    }  
  };  

  const handleOperatorClick = (op) => {  
    // Avoid consecutive operators and ensure an expression before appending an operator  
    if (expression && !isNaN(expression[expression.length - 1]) && !expression.endsWith(' ')) {  
      setExpression(expression + ' ' + op + ' '); // Append operator with spaces for clarity  
    }  
  };  

  const calculateResult = () => {  
    try {  
      // Replace 'X' with '*' for multiplication and evaluate the expression  
      const updatedExpression = expression.replace(/X/g, '*');  
      const result = eval(updatedExpression);  
      setExpression(result.toString());  
    } catch (error) {  
      setExpression('Error'); // Handle any evaluation errors  
    }  
  };  

  const clear = () => {  
    setExpression('');  
  };  

  return (  
    <div className="container">  
      <div className="calculator">  
        <form action="">  
          <div className="CalculatorText">  
            <input type="text" value={expression} readOnly />  
          </div>  

          <div>  
            <input type="button" value="C" onClick={clear} />  
            <input type="button" value="+-" />  
            <input type="button" value="%" />  
            <input type="button" value="/" onClick={() => handleOperatorClick('/')} />  
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
            <input type="button" value="-" onClick={() => handleOperatorClick('-')} />  
          </div>  

          <div>  
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />  
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />  
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />  
            <input type="button" value="+" onClick={() => handleOperatorClick('+')} />  
          </div>  

          <div>  
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />  
            <input type="button" value="." onClick={() => handleButtonClick('.')} />  
            <input type="button" value="=" className='equal' onClick={calculateResult} />  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
}  

export default App;