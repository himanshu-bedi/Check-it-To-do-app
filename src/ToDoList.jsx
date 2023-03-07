import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="main">
        <div className="to_do">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              props.whenclick(props.id);
            }}
          ></i>
          <li>{props.itemval}</li>
        </div>
        <div>
          <i
            className="fa fa-edit"
            aria-hidden="true"
            onClick={() => {
              props.editit(props.id);
            }}
          ></i>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
