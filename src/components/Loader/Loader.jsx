import React from 'react';
import './Loader.css';


const Loader = (props) => {

    return (
    <div className="load-wrap">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    )
}

export default Loader;