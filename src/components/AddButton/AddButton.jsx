import React from 'react';

const AddButton = (props) => {
    return (
    <div>
        <button className="btn btn-primary btn-lg mb-3" onClick={props.onAddHand.bind(null, props.isFromOpen)}>Add</button>
    </div>
    )
}

export default AddButton