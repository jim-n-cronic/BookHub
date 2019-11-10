import React from 'react';
import "./style.css";

const DeleteButton = (props) => {
    return(
        <span className="belete-btn" {...props} role="button" tabIndex="0">
            X
        </span>
    );
}

export default DeleteButton;