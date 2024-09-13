  import React,{Fragment,useState} from "react";
  import Header from "./components/Header/Header";
  import Candidates from "./components/Candidates/Candidates";
  import Input from "./components/UI/Input";
  import InputProvider from "./store/InputProvider";

function App() {

  const[showInput,setShowInput]=useState(false);

  const showInputHandler=()=>{
    setShowInput(true);
  }
  const hideInputHandler=()=>{
    setShowInput(false);
  }

  return (
    <InputProvider>
      {showInput && <Input onClose={hideInputHandler}/>}
      <Header onShow={showInputHandler}/>
      <Candidates/>
    </InputProvider>
  
  );
}

export default App;
