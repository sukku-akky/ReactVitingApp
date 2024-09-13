import React,{useContext} from "react";
import InputContext from "../../store/input-context";

const Akshara=()=>{
    const inputCtx=useContext(InputContext);

    const voters=<ul>{inputCtx.akshara.map((vote)=>(
        <li key={vote.id}>{vote.name} <button onClick={()=> inputCtx.delete(vote.id,"akshara")}>delete</button></li>
    ))}</ul>

    const totalVotes=inputCtx.akshara.length;

    return <>
    <div>
        <h1>Akshara</h1>
        <p>Total:{totalVotes}</p>
        {voters}
    </div>
    </>


}

export default Akshara;