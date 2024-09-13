import React,{createContext} from "react";

const InputContext=createContext({
    ashok:[],
    sukanya:[],
    akshara:[],
    addToAshok:()=>{},
    addToSukanya:()=>{},
    addToAkshara:()=>{},
    delete:()=>{},
    totalVotes:0
});



export default InputContext;