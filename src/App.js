import './App.css';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [initialData, setInitialData] = useState({initialValue: 1, maxValue: 1000});
  
  const setInitialDataHandler = (e) => {
    let name = e.target.name,
    value = parseInt(e.target.value) || 1;
    const obj = {
      ...initialData,
      [name] : value
    }
    setInitialData(obj);
    if(name === "initialValue" && value <= initialData.maxValue){
      setCounter(parseInt(value) || 1);
    }else if(name === "maxValue" && value <= counter){
      setCounter(parseInt(value));
    }
  }

  const updateInitialValue = (e) => {
    let value = e.target.value;
    // console.log(value, initialData.maxValue);
    if(value <= initialData.maxValue && value >= 0 ){
      // console.log(value, initialData.maxValue,value !== "", parseInt(value)); 
      setCounter(value !== "" ? parseInt(value) : 1);
    }

  }

  const counterHandler = (operation) => {
    if(operation === "increment"){
      if(counter < initialData.maxValue){
        setCounter((state) => {
          return state + 1;
        })
      }
    }else{
      if(counter > 1){
        setCounter((state) => {
          return state - 1;
        })
      }

    }
  }

  return (
      <div className="App-main">
        <div className="initial-value-main">
          <span>Initial Value : </span>
          <input type="number" value={initialData.initialValue} name="initialValue" onChange={setInitialDataHandler} />
        </div>
        <div className="max-value-main">
          <span>Max Value : </span>
          <input type="number" value={initialData.maxValue} name="maxValue" onChange={setInitialDataHandler} />
        </div>
        <div className="counter-main">
          <div className="decrement-btn" onClick={counterHandler.bind(this, "decrement")}> - </div>
          {/* <div className="counter"> {counter}</div> */}
          <div className="counter" >

            <input type="number" value={counter} className="counter-input" size="1" onChange={updateInitialValue} />
          </div>
          <div className="increment-btn" onClick={counterHandler.bind(this, "increment")}> + </div>
        </div>
      </div>
  );
}

export default App;
