import React, { useState } from 'react';
import './App.css';
import DebounceTypeAhead from './components/DebounceTypeAhead';
 
function App() {
  const[typeAheadData,setTypeAheadData]=useState([]);
  const testData = [
    { 
      id: 'test2', 
      primaryText: 'Test2', 
      secondryText: 'test2@gmail.com',
      image:"https://homepages.cae.wisc.edu/~ece533/images/cat.png" 
    }];
  const asyncMethod=(value)=>{
      setTypeAheadData(testData)
  }

  const itemSelectHandler=(data)=>{
    console.log(JSON.stringify(data));
  }
  return (
    <div className="App">
      <header className="App-header">

        <DebounceTypeAhead 
        delay={2000} 
        isSecondryTextVisible={true} 
        placeholder={"Search email id"} 
        onSearch={asyncMethod} 
        type={"IMAGETYPE"}
        typeAheadData={typeAheadData}
        onItemSelect={itemSelectHandler}
        />

       <br/>

        <DebounceTypeAhead 
        delay={2000} 
        isSecondryTextVisible={true} 
        placeholder={"Search text"} 
        onSearch={asyncMethod} 
        type={"TEXTONLY"}
        typeAheadData={typeAheadData}
        onItemSelect={itemSelectHandler}
        />

      </header>
    </div>
  );
}

export default App;
