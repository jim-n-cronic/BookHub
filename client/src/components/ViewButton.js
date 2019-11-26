import React from 'react'

function ViewButton(props) {

    return(
        <span>
            <a className="btn btn-primary btn-sm text-light" href={props.bookLink} target="_blank">More details @ googleBooks</a>
        </span>
    )
}
export default ViewButton