import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const Backdrop =()=>{
    return <div className={classes.backdrop}></div>

}

const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

}

const portalElement=document.getElementById("overlays");

const Modal=(props)=>{
    return <>
    {ReactDom.createPortal(<Backdrop/>,portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>

}

export default Modal;