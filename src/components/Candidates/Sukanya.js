import React,{useContext} from "react";
import InputContext from "../../store/input-context";

const Sukanya=()=>{
    const inputCtx=useContext(InputContext);

    const voters=<ul>{inputCtx.sukanya.map((vote)=>(
        <li key={vote.id}>{vote.name}  <button onClick={()=>inputCtx.delete(vote.id,"sukanya")}>delete</button></li>
    ))
        }</ul>

    const totalVotes=inputCtx.sukanya.length;
    return <>
    <div>
        <h1>Sukanya</h1>
        <p>Total:{totalVotes}</p>
        {voters}
    </div>
    </>


}

export default Sukanya;