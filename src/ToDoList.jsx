import React from "react";

const ToDoList=(props)=>{

    
    return (
        
        <>
         <div className="to_do">
            <i className="fa fa-times" aria-hidden="true" 
            onClick ={ ()=>{
                props.whenclick(props.id);
            }}
            ></i>
        <li>{props.itemval}</li>
         
         
        </div>
        </>
    );
}
export default ToDoList;