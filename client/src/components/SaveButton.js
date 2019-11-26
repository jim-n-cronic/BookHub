import React, { Component } from 'react'


class SaveButton extends Component {

    state = {
        saved: false
    }
    handleSave = () => {
        this.props.savebook(this.props.book);
        this.setState({ saved: true });
    }
    render() {
        return(
            <span>
                {this.state.saved ? (
                    <span role="button" className="btn btn-secondary text-light disabled btn-sm">Added To Saved!</span>
                ) : (
                    <span role="button" {...this.props} className="btn btn-primary text-light btn-sm" onClick={()=>this.handleSave()}>Save</span>
                )}
            </span>
        )
    }
}
export default SaveButton