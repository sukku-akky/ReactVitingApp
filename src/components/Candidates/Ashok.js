import React,{useContext} from "react";
import InputContext from "../../store/input-context";

const Ashok=()=>{
    const inputCtx=useContext(InputContext);
   
    const voters=<ul>{inputCtx.ashok.map((vote)=>(
        <li key={vote.id}>{vote.name}  <button onClick={()=>inputCtx.delete(vote.id,"ashok")}>delete</button></li>
        ))}</ul>;
    const totalVotes=inputCtx.ashok.length;

    return <>
    <div>
        <h1>Ashok</h1>
        <p>Total:{totalVotes}</p>
        
        {voters}
    </div>
    </>


}

export default Ashok;