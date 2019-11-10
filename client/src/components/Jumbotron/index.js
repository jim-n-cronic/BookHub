import React from 'react';

function Jumbotron({ children }) {
    return(
        <div
        style={{ height: 300, clear: "both",  textAlign: "center" }}
        className="jumbotron">
            {children}
        </div>
    )
}

export default Jumbotron;