import React ,{useState,useContext}from "react";
import Modal from "./Modal";
import InputContext from "../../store/input-context";

const Input=(props)=>{ 
    const inputCtx=useContext(InputContext);
    const[formData,setFormData]=useState({
        name:"",
        candidate:""
    })

    

    const changeInputHandler=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value, 
          });
    }

    const[voterId,setVoterId]=useState(1);

    const addNewVoter=(event)=>{
        event.preventDefault();
        

        const voterDetails={
            id:voterId,
            name:formData.name,
            candidate:formData.candidate,
        };
        if(voterDetails.candidate==="ashok"){
            inputCtx.addToAshok(voterDetails);
            
        } else if(voterDetails.candidate==="sukanya"){
            inputCtx.addToSukanya(voterDetails);
        } else{
            inputCtx.addToAkshara(voterDetails);
        }
       
        setVoterId(voterId+1);
        formData.name="";
        formData.candidate="";
    }

    return <Modal>
        <form onSubmit={addNewVoter}>
        <label htmlFor="name">Student Name:</label>
        <input 
        id="name" 
        type="text" 
        onChange={changeInputHandler} 
        value={formData.name}
        name="name"
        />
        <br/>
        <label htmlFor="candidate">Choose Monitor:</label>
        <select 
        id="candidate"
        name="candidate"
        value={formData.candidate}
        onChange={changeInputHandler}
        >
            <option value="">-- Select a Monitor --</option>
            <option value="ashok">Ashok</option>
            <option value="sukanya">Sukanya</option>
            <option value="akshara">Akshara</option>
        </select>
        <br/>
        <button type="submit">Vote</button>
        <button type="button" onClick={props.onClose}>X</button>
    </form>
    </Modal>

}

export default Input;