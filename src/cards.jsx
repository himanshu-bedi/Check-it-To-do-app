import React from "react";

function cards(props)
{
    return (
       <div className="cards">
        <div className="card">
            <img src={props.source} alt={props.name}></img>
          <h2>Netflix productions</h2>
          <a href="" target="\">
                <button>Check Now</button>
          </a>
        </div>
       </div>
    );
}

export default cards;