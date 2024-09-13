import React,{useState} from "react";
import InputContext from "./input-context";

const InputProvider=(props)=>{

    const [ashokVoters,setAshokVoters]=useState([]);
    const [sukanyaVoters,setSukanyaVoters]=useState([]);
    const [aksharaVoters,setAsharaVoters]=useState([]);
    const [totalVoters,setTotalVoters]=useState(0);

    const addVoterToAshok=(voter)=>{
        setAshokVoters((prevVoters)=> [...prevVoters,voter])
        setTotalVoters(totalVoters+1);

    }

    const addVoterToSukanya=(voter)=>{
        setSukanyaVoters((prevVoters)=>[...prevVoters,voter]);
        setTotalVoters(totalVoters+1);
    }

    const addVoterToAkshara=(voter)=>{
        setAsharaVoters((prevVoters)=>[...prevVoters,voter]);
        setTotalVoters(totalVoters+1);
    }

    const deleteVoter=(id,candidate)=>{
        if (candidate === "ashok") {
            setAshokVoters((prevVoters) => prevVoters.filter((voter) => voter.id !== id));
            setTotalVoters(totalVoters-1);
        } else if (candidate === "sukanya") {
            setSukanyaVoters((prevVoters) => prevVoters.filter((voter) => voter.id !== id));
            setTotalVoters(totalVoters-1);
        } else if (candidate === "akshara") {
            setAsharaVoters((prevVoters) => prevVoters.filter((voter) => voter.id !== id));
            setTotalVoters(totalVoters-1);
        }
     
    }
   

    const inputContext={
        ashok:ashokVoters,
        sukanya:sukanyaVoters,
        akshara:aksharaVoters,
        addToAshok:addVoterToAshok,
        addToSukanya:addVoterToSukanya,
        addToAkshara:addVoterToAkshara,
        delete:deleteVoter,
        totalVotes:totalVoters
    }
    return (
        <InputContext.Provider value={inputContext}>{props.children}</InputContext.Provider>
    )

}

export default InputProvider;