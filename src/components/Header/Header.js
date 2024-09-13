import React,{Fragment,useContext}from "react";
import classes from "./Header.module.css";
import InputContext from "../../store/input-context";

const Header=(props)=>{
    const inputCtx=useContext(InputContext);

    return <Fragment>
        <div className={classes.header}>
        <h1>Class Monitor Vote</h1>
        <p>Total Votes:{inputCtx.totalVotes}</p>
        <button onClick={props.onShow}>Add New Vote</button>
        </div>

    </Fragment>

}

export default Header;